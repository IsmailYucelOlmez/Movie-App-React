import React, { useEffect, useState } from 'react'
//import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
//import "react-circular-progressbar/dist/styles.css";
import CircularProgress from '@mui/joy/CircularProgress';

const CircleRating =({ rating }) => {

  const [color,setColor]=useState("success");
  
  useEffect(()=>{
    if(rating <5){
      setColor("danger")
    } 
    else if(rating<7){
      setColor("warning")
    }else{
      setColor("success")
    }

  },[rating])
  

  return (
      <div className="">

        <CircularProgress variant="plain" color={color}  sx={{color:"black",fontSize:"13px", backgroundColor:"white","--CircularProgress-progressThickness": "4px",}} determinate value={rating*10}>
          {rating}
        </CircularProgress>

      </div>
  )
}

export default CircleRating
