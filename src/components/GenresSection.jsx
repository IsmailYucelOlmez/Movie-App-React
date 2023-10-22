import React from 'react'
import { useSelector } from 'react-redux'

const GenresSection = ({data}) => {

  const {genres}=useSelector((state)=>state.home)
  
  return (
    <div className='xs:hidden lg:flex max-w-36 h-12 z-20 justify-end items-end flex-wrap'>
      {data?.map((id)=>{

        if(!genres[id]) return;

        return(
          <div key={id} className='text-white bg-pink-600 text-xs max-w-min m-0.5 p-0.5 flex rounded-md text-center'>
            {genres[id]}
          </div>
          
        )
      })}
    </div>
  )
}

export default GenresSection
