import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import dayjs from "dayjs";
import GenresSection from '../../components/GenresSection';
import CircleRating from '../../components/CircleRating';
import Image from '../../components/Image';
import Skeleton from '@mui/material/Skeleton';
import VideoPopup from '../../components/VideoPopup';

const DetailsBanner = ({video,crew}) => {

  const params=useParams();
  
  const {data,loading}=useFetch(`/${params.mediaType}/${params.id }`);

  const {url}=useSelector((state)=>state.home)

  const elementGenres=data?.genres?.map((genre)=>genre.id);

  const rating=data?.vote_average?.toFixed(1);

  const directories=crew?.filter((f)=>f.job=="Director")

  const writers=crew?.filter((f)=>f.job=="Writer" || f.job=="Story" || f.job=="Screenplay")

  const [show,setShow]=useState(false);
  const [videoId,setVideoId]=useState(null);

  const convertDuration=(totalMinute)=>{

    const hour=Math.floor( totalMinute/60 )
    const minute=totalMinute%60;

    return `${hour}h ${minute >0 ? `${minute}m`:""}`

  }

  return (
    <div className=''>
      {!loading ? (
        <>
          <div className='w-full md:h-112 lg:h-160 xs:hidden md:flex -mt-10 flex justify-center'>
            <Image src={url.backdrop + data?.backdrop_path} className={"w-full h-full"}/>
          </div>
          {data?.poster_path ? (
          <div className='xs:flex md:hidden w-full mb-5 xs:h-128 sm:h-160 flex justify-center '>
            <Image src={url.backdrop + data?.poster_path} className={"w-full h-full"}/>
          </div>
          ):(
            <div className="xs:flex lg:hidden w-full m-2 xs:h-128 sm:h-160 flex justify-center ">
              <div className='h-full w-96 bg-noposter bg-cover'></div>
            </div>
          )}
          <div className='lg:container flex justify-center m-5'>
            <div className='xs:w-full lg:w-3/4 '>
              <p className='xs:text-2xl lg:text-5xl mb-5'>{`${data?.title || data?.name}  (${dayjs(data?.release_date).format("YYYY")})`}</p> 
              <p className='xs:text-sm '>{data?.tagline}</p> {/*tablet için tasarımı not al popular ve top rated ile ilgili hatayı düzelt*/}
            
              <div className='mt-5'>

                <GenresSection data={elementGenres}/>

              </div>

              <div className='mt-8 flex gap-8'>

                <CircleRating rating={rating} pageOption={"details"}/>

                <div onClick={()=>{setShow(true); setVideoId(video.key);}} className='flex items-center gap-3 text-pink-700 hover:text-pink-400'>
                  <i className="fa-regular fa-circle-play text-5xl"></i>
                  <p className='text-xl '>Watch Trailer</p>
                </div>

              </div>

              <div className='mt-8 '>

                <p className='text-2xl'>Overview</p>

                <div className='mt-3'>
                  {data?.overview}

                </div>

              </div>

              <div className='flex mb-10 xs:justify-between '>

                <div className='flex xs:flex-col lg:flex-row xs:gap-10 lg:gap-20 mt-8'>

                  <div >
                    <p className='text-2xl underline mb-4 underline-offset-8'>Directory </p>
                    {directories?.map((d, i) => (
                    <p className='' key={i}>
                    {d.name}
                  
                    </p>
                    ))}
              
                  </div>

                  <div >
                    <p className='text-2xl underline mb-4 underline-offset-8'>Writer</p>
              
                    {writers?.map((w,i)=>(
                    <p className='' key={i}>{w.name}</p>
                    ))} 
              
                  </div>

                </div>

                <div className='mt-8 mr-5 flex xs:flex-col lg:flex-row xs:gap-4 lg:gap-10'>

                  <div className='lg:border-r-2  xs:border-b-2 lg:border-b-0 xs:pb-5 lg:pb-0 lg:pr-10 border-white flex flex-col justify-center items-center'>
                    <p className='font-bold'>Status</p>
                    <p className='opacity-50'>{data?.status}</p>
                  </div>

                  <div className='lg:border-r-2  xs:border-b-2 lg:border-b-0 xs:pb-5 lg:pb-0 lg:pr-10  border-white flex flex-col justify-center items-center'>
                    <p className='font-bold'>Release Date</p>
                    <p className='opacity-50'>{dayjs(data?.release_date).format("D MMM YYYY")} </p>

                  </div>

                  <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold'>Runtime</p>
                    <p className='opacity-50'>{convertDuration(data?.runtime)}</p>

                  </div>
              
                </div>

              </div>

            </div>

          </div>

          <VideoPopup setShow={setShow} show={show} videoId={videoId} setVideoId={setVideoId}/>
            
          
        </>
      ):(
        <div className='flex flex-col items-center gap-6 my-5 mb-3 w-full h-screen'>
          <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="70%" height="80%" /> 
          <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="70%" height="10%" />
          <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="70%" height="20%" />
          <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="70%" height="20%" />
          
            
        </div>
      )}
    </div>
  )
}

export default DetailsBanner
