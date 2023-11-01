import React from 'react'
import SwitchTabs from '../../components/SwitchTabs'
import useFetch from '../../hooks/useFetch';
import Carousel from '../../components/Carousel'
import { useState } from 'react';

const PopularSection = () => {

  const [endpoint,setEndpoint]=useState("movie");

  const {data,loading}=useFetch(`/${endpoint}/popular`)

  console.log(data)

  const onTabChange=()=>{

    if(endpoint=="movie") setEndpoint("tv") 
    else setEndpoint("movie")

  }

  return (
    <div className='lg:container mx-auto flex justify-center mt-12 xs:mx-5'>

      <div className='xs:w-full lg:w-3/4'>

        <div className='flex justify-between w-full'>
          <h2 className='text-2xl '>Popular</h2>
          <SwitchTabs endpoint={endpoint} onTabChange={onTabChange} options={["movie","tv"]}/>
        </div>

        <Carousel data={data?.results} loading={loading} />


      </div>
      
    </div>
  )
}

export default PopularSection
