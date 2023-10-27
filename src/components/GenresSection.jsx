import React from 'react'
import { useSelector } from 'react-redux'

const GenresSection = ({data}) => {

  const {genres}=useSelector((state)=>state.home)

  
  return (
    <div className='flex items-end'>
      {data?.map((id)=>{

        if(!genres[id]) return;

        return(
          <div key={id} className='text-white bg-pink-600 text-sm max-w-min max-h-min m-0.5 p-0.5 flex text-center rounded-md '>
            {genres[id]}
          </div>
          
        )
      })}
    </div>
  )
}

export default GenresSection
