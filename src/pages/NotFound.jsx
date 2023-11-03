import React from 'react'
import { useEffect } from 'react';

const NotFound = () => {

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])
  
  return (
    <div className='lg:container h-112'>

      <h1 className='text-center text-2xl my-5'>Page Not Found</h1>

      <div className='xs:1/3 lg:w-1/4 h-96  mx-auto bg-noresult bg-cover mb-10'>
      </div>
      
    </div>
  )
}

export default NotFound
