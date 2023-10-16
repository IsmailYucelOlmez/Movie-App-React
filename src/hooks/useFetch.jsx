import React, { useEffect, useState } from 'react'
import {fetchData} from '../api/Api';

const useFetch = (url) => {
  const [loading,setLoading]=useState(null);  
  const [data,setData]=useState(null);
  const [error,setError]=useState(null);

  useEffect(()=>{

    setLoading("loading");
    setData(null);
    setError(null);

    fetchData(url).then((res)=>{
      setLoading(false);
      setData(res);
      
    }).catch(()=>{

        setLoading(false);
        setError("Something went wrong");
    })

  },[url])


  return { data,loading,error }
}

export default useFetch
