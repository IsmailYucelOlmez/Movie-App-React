import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {fetchData} from '../api/Api'
import {ReactSVG} from 'react-svg';
import loadingSVG from '../assets/Magnify-2s-200px.svg'
import MovieCard from '../components/MovieCard';
import InfiniteScroll from "react-infinite-scroll-component";

const SearchResult = () => {

  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [pageNumber,setPageNumber]=useState(1);

  const {query}=useParams();

  const {url}=useSelector((state)=>state.home)

  const fetchInitialData=async()=>{

    setLoading(true);
    fetchData(`/search/multi?query=${query}&page=${pageNumber}`).then(
      (res) => {
          setData(res);
          setPageNumber((prev) => prev + 1);
          setLoading(false);
        }
      );

  }

  const FetchNextPage=async()=>{

    fetchData(`/search/multi?query=${query}&page=${pageNumber}`).then(
      (res) => {
        if (data?.results) {
          setData({
              ...data,
              results: [...data?.results, ...res.results],
          });
        } else {

          setData(res);
        }

          setPageNumber((prev) => prev + 1);
      }
    );
  }

  useEffect(()=>{

    setPageNumber(1);
    fetchInitialData();

  },[query])

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

            <h1 className='text-3xl mb-5'>Search Results</h1>

            {data?.results?.length>0 ? (

              

            <InfiniteScroll className="flex flex-wrap xs:justify-between w-full gap-4" dataLength={data?.results?.length || []} next={FetchNextPage} hasMore={pageNumber <= data?.total_pages}
                            loader={
                              <div className='min-h-full flex items-center justify-center'>

                                <ReactSVG src={loadingSVG} className='h-24' />
                              </div>
                            }
            >

                {data?.results?.map((item,i)=>{

                  if(item.media_type=="person") return;

                  return(
                  
                  <MovieCard key={i} data={item} />

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

export default SearchResult
