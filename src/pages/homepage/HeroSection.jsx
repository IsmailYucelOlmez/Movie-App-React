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
    <div className="flex items-center justify-center lg:container mx-auto  xs:h-72 lg:h-128 -mt-10">

      {!loading && (

        <div className='lg:w-3/4 lg:h-128 overflow-hidden absolute top-0 opacity-50'>
      
          <Image src={background} className={"object-cover"}/>

        </div>
      )}


       <div className="flex flex-col xs:w-full lg:w-3/4 items-center justify-center z-20">

       <p className='xs:text-4xl lg:text-7xl mb-2 text-center'>Welcome.</p>
       <p className='xs:text-md lg:text-lg mb-2 text-center'>Millions of movies, TV shows and people to discover. Explore now</p>

       <div className='mt-2 xs:w-4/5 lg:w-1/2 flex justify-center'>
         <input type="text" onChange={(e)=>setSearch(e.target.value)} onKeyDown={(e)=>{handleSearch(e)}} className='w-4/5 p-2 rounded-l-xl text-black focus:outline-none' placeholder='Search for a movie or a TV show' />
         <button onClick={getSearchResult} className='p-2 rounded-r-xl bg-gradient-to-r from-orange-400 to-red-400'>Search</button>
       </div>

       </div>
      
      
      

    </div>
  )
}

export default HeroSection
