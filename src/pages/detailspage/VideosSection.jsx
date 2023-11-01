import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import VideoPopup from '../../components/VideoPopup';
import Image from '../../components/Image';

const VideosSection = ({data,loading}) => {

    const [show,setShow]=useState(false);
    const [videoId,setVideoId]=useState(null);


  return (
    <div className='lg:container flex justify-center relative mb-10'>
        <div className='xs:w-full lg:w-3/4 px-4'>

            <h1 className='xs:text-3xl lg:text-4xl xs:mb-4 lg:mb-8'>Videos</h1>

            {!loading ? (
                <div className='flex xs:gap-4 lg:gap-9 overflow-hidden'>
                    {data?.results?.map((video) => (
                            <div key={video.id}
                                onClick={() => {
                                    setVideoId(video.key);
                                    setShow(true);
                                }}
                            >
                                <div className="xs:w-32 lg:w-60 xs:h-18 lg:h-36 relative ">
                                    <Image
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                    />
                                    <i className="fa-regular fa-circle-play xs:text-2xl lg:text-3xl absolute top-1/3 left-2/5 "></i>
                                </div>
                                <div className="videoTitle mt-3">{video.name}</div>
                            </div>
                        ))}

                </div>
            ):(
              <div className='flex flex-col items-center gap-6 my-5 mb-3 w-full h-screen'>
          
                <Skeleton variant="rectangular" sx={{ bgcolor: "grey" }}  width="70%" height="20%" />                      
              </div>
            )}
        </div>
        <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
      
    </div>
  )
}

export default VideosSection
