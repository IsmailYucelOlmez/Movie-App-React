import React, { useRef, useState } from 'react'
import Image from './Image'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import CircleRating from './CircleRating';
import GenresSection from './GenresSection';



const Carousel = ({data,loading}) => {

  const containerRef=useRef();
  const navigate=useNavigate();

  const {url}=useSelector((state)=>state.home)

  
  const scroll = (dir) => {
    const container = containerRef?.current;

    const scrollAmount=dir== "left" ? container.scrollLeft - (container.offsetWidth ) : container.scrollLeft + (container.offsetWidth );         

    container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
    });

  };


  return (
    <div className='flex relative' >

      {!loading ? (

        <div className='flex xs:gap-4 lg:gap-7 my-5 overflow-hidden' ref={containerRef}>       

          {data?.map((item)=>{

            const posterUrl=url.poster+item.poster_path;

            return(
            <div onClick={()=>{item.media_type && navigate(`/${item.media_type}/${item.id}`)}} className='xs:h-52 lg:h-88 flex flex-col justify-between' key={item.id}>

              <div className='xs:w-24 lg:w-48 xs:h-28 lg:h-56 '>
                <Image src={posterUrl} className={`${posterUrl ? "w-full": "bg-noposter"} rounded-md`}/>

                <div className='flex justify-between items-center xs:-mt-6 lg:-mt-14 ml-1'>
                <CircleRating rating={item.vote_average.toFixed(1)} pageOption={"carousel"}/>

                <div className='xs:hidden lg:flex justify-end items-end max-w-36 h-12 z-20'>
                <GenresSection data={item.genre_ids.slice(0,2)} />
                </div>

                </div>

              </div>

              <div className='xs:w-24 lg:w-48 '>
                              
                <p className='lg:text-xl truncate'>{item.title || item.name}</p>
                <p className='xs:text-xs lg:text-sm'>{dayjs(item.release_date).format('D MMM YYYY')}</p>       
            
              </div>

            </div>
            )

          })}

        </div>

      ):(
        <div className=' flex flex-col w-full my-5'>
          <div className='flex justify-between w-full mb-3 xs:h-56 lg:h-96'>
          <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="22%" height="100%" />  
          <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="22%" height="100%" />
          <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="22%" height="100%" />
          <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="22%" height="100%" />
          </div>
          <Skeleton  sx={{ bgcolor: "grey" }} width="100%"/>
            
        </div>
        
        
      )} 

          <i onClick={()=>scroll("left")} className='w-6 h-6 flex justify-center items-center rounded-full bg-white text-black border border-black absolute left-1.5 top-2/5 fa-solid fa-angle-left z-20'></i>
          <i onClick={()=>scroll("right")} className='w-6 h-6 flex justify-center items-center rounded-full bg-white text-black border border-black absolute right-1.5 top-2/5 fa-solid fa-angle-right z-20'></i>

    </div>
  )
}

export default Carousel
