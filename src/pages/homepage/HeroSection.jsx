import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Image from '../../components/Image';

const HeroSection = () => {

  const [background,setBackground]=useState("");
  const [search,setSearch]=useState("");
  const navigate=useNavigate();

  const {url}=useSelector((state)=>state.home)
  const {data, loading}=useFetch("/movie/upcoming");

  console.log(data);

  useEffect(()=>{

    const bg=url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
    setBackground(bg);

  },[data]) 

  const handleSearch=(e)=>{

    if(e.key=="Enter" && search!="") getSearchResult();
  }

  const getSearchResult=()=>{

    if(search!="") navigate(`/search/${search}`)
    
  }


  return (
    <div className="flex justify-center items-center lg:container mx-auto  xs:h-52 md:h-88 lg:h-112">

      {!loading && (

        <div className='xs:w-full xs:h-64 md:h-88 lg:w-3/4 lg:h-112 overflow-hidden absolute xs:top-10 lg:top-0 opacity-50'>
      
          <Image src={background} className={"object-cover"}/>

        </div>
      )}


       <div className="flex flex-col xs:w-full lg:w-3/4 items-center justify-center z-20">

       <p className='xs:text-3xl lg:text-7xl mb-2 text-center'>Welcome.</p>
       <p className='xs:text-sm lg:text-lg mb-2 text-center'>Millions of movies, TV shows and people to discover. Explore now</p>

       <div className='xs:mt-1 lg:mt-2 xs:w-4/5 lg:w-1/2 flex justify-center'>
         <input type="text" onChange={(e)=>setSearch(e.target.value)} onKeyDown={(e)=>{handleSearch(e)}} className='xs:w-4/5 md:w-2/3 lg:w-4/5 xs:h-8 lg:h-10 p-2 rounded-l-xl text-black focus:outline-none' placeholder='Search for a movie or a TV show' />
         <button onClick={getSearchResult} className='xs:p-1 lg:p-2 xs:h-8 lg:h-10 rounded-r-xl bg-gradient-to-r from-orange-400 to-red-400'>Search</button>
       </div>

       </div>
      
      
      

    </div>
  )
}

export default HeroSection
