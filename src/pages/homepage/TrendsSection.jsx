import React, { useState } from 'react'
import SwitchTabs from '../../components/SwitchTabs'
import useFetch from '../../hooks/useFetch';
import Carousel from '../../components/Carousel'

const TrendsSection = () => {

  const [endpoint,setEndpoint]=useState("day");
  const options=["day","week"];

  const {data,loading}=useFetch(`/trending/all/${endpoint}`)

  const onTabChange=()=>{

    if(endpoint=="day") setEndpoint("week") 
    else setEndpoint("day")

  }

  return (
    <div className='lg:container mx-auto flex justify-center mt-12 xs:mx-5'>

      <div className='xs:w-full lg:w-3/4'>

        <div className='flex justify-between w-full'>
          <h2 className='text-2xl '>Trending</h2>
          <SwitchTabs endpoint={endpoint} onTabChange={onTabChange} options={options}/>
        </div>

        <Carousel data={data?.results} loading={loading} />


      </div>
      
    </div>
  )
}

export default TrendsSection
