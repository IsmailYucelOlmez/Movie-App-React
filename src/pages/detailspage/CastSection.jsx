import React from 'react'
import { useSelector } from 'react-redux'
import avatar from '../../assets/avatar.png'
import Image from '../../components/Image'
import Skeleton from '@mui/material/Skeleton';

const CastSection = ({data,loading}) => {

    const {url}=useSelector((state)=>state.home)

    
  return (
    <div className='lg:container flex flex-col items-center'>

      <div className=' xs:w-full lg:w-3/4 mb-12 '>
      
        <h1 className='xs:text-3xl lg:text-4xl xs:mb-5 lg:mb-10 xs:ml-4'>Top Cast</h1>
      

        {!loading ? (

          <div className='flex xs:px-4 xs:gap-8 lg:gap-5 overflow-scroll scrollbar-none'>

          {data?.map((player)=>{

            let imgUrl=player.profile_path ? url.profile+player.profile_path : avatar
          
            return(

              <div key={player.id} className='min-w-1/4'>

                <div className='rounded-full overflow-auto scrollbar-none xs:w-16 xs:h-16 md:w-24 md:h-24 lg:w-36 lg:h-48'>
                    <Image src={imgUrl}/>
                </div>
                <div className='text-white'>
                  <p className='lg:text-xl my-2'>{player.name}</p>
                  <p className='opacity-50'>{player.character}</p>
                </div>
                
              </div>
            )
        })}
        
        </div>
      ):(

        <div className='flex flex-col items-center gap-6 my-5 mb-3 w-full h-screen'>
          
          <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="80%" height="30%" />             
            
        </div>

      )}

      </div>

    </div>
  )
}

export default CastSection
