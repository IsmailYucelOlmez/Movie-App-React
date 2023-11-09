import React from 'react'
import useFetch from '../hooks/useFetch'
import {fetchData} from '../api/Api'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import loadingSVG from '../assets/Magnify-2s-200px.svg'
import Select from "react-select";
import {ReactSVG} from 'react-svg';
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from '../components/MovieCard';


let filters = {};

const sortbyData = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending"},
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
];

const ExplorePage = () => {
  const [data, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  const fetchInitialData = () => {
    setLoading(true);
    fetchData(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setPageNumber((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPage= () => {
    fetchData(`/discover/${mediaType}?page=${pageNumber}`,filters).then((res) => {
        if (data?.results) {
            setData({
                ...data,
                results: [...data?.results, ...res.results],
            });
        } else {
            setData(res);
        }
        setPageNumber((prev) => prev + 1);
    });
};

  useEffect(() => {
    filters = {};
    setData(null);
    setPageNumber(1);
    setSortby(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
          filters.sort_by = selectedItems.value;
      } else {
          delete filters.sort_by;
      }
  }

  if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
          let genreId = selectedItems.map((g) => g.id);
          genreId = JSON.stringify(genreId).slice(1, -1);
          filters.with_genres = genreId;
      } else {
          delete filters.with_genres;
      }
  }

    setPageNumber(1);
    fetchInitialData();
  };

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])


  
  return (
    <div className='lg:container min-h-screen mx-auto mt-10'>

      <div className='xs:w-full lg:w-3/4 lg:mx-auto xs:px-5 lg:px-0 '>
        {loading && (

          <div className='min-h-full flex items-center justify-center'>
            <ReactSVG src={loadingSVG} className='h-24' />
          </div>

        )}
        {!loading && (

          <div>

            <div className='lg:flex justify-between mb-10'>

            <h1 className='text-3xl mb-5'>{mediaType=="tv" ? "TV Shows":"Movies"}</h1>

            <div className='flex gap-5'>
              <Select isMulti name="genres" value={genre} closeMenuOnSelect={false} options={genresData?.genres}
                      getOptionLabel={(option) => option.name} getOptionValue={(option) => option.id}
                      onChange={onChange} placeholder="Select genres" className="xs:w-1/2 lg:w-48 text-black rounded-lg"/>
                      
              <Select name="sortby" value={sortby} options={sortbyData} onChange={onChange} isClearable={true}
                      placeholder="Sort by" className="xs:w-1/2 w-48 text-black rounded-lg"classNamePrefix="react-select"/>
            </div>

            </div>


            {data?.results?.length>0 ? (

              

            <InfiniteScroll className="flex flex-wrap xs:justify-between w-full gap-4 scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-slate-400" dataLength={data?.results?.length || []} next={fetchNextPage} hasMore={pageNumber <= data?.total_pages}
                            loader={
                              <div className='min-h-full flex items-center justify-center '>

                                <ReactSVG src={loadingSVG} className='h-24' />
                              </div>
                            }
            >

                {data?.results?.map((item,i)=>{

                  if(item.media_type=="person") return;

                  return(
                  
                  <MovieCard key={i} data={item} mediaType={mediaType} />

                  )

                  })}
                
              </InfiniteScroll>
            ):(

              <div className='w-96 h-96 bg-noresult bg-cover mx-auto' >

                
                <p className='text-xl text-black'>No Results Found</p>

              </div>
            )}

          </div>

        )}

      </div>
      
    </div>
  )
}

export default ExplorePage
