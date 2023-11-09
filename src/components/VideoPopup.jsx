import React from 'react'
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {

  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div className={`w-full mx-auto absolute top-0 left-0 h-screen z-50 flex justify-center items-center ${show ? "visible" : "invisible"}`}>
            <div className="absolute w-full h-full backdrop-blur-sm" onClick={hidePopup}></div>
            <div className="relative bg-white xs:w-full lg:w-4/5 xs:h-1/2 md:h-2/3 lg:h-4/5">
                <span className="absolute -top-6 right-0 text-red cursor-pointer rounded-full flex justify-center items-center px-2 border-2" onClick={hidePopup}>
                    X
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    //playing={true}
                />
            </div>
        </div>
  )
}

export default VideoPopup
