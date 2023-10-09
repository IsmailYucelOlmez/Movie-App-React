import { useState,useEffect } from 'react'
import { fetchData } from './api/Api'
import './App.css'

function App() {

  const apiTest=()=>{
    fetchData('/movie/popular')
    .then((res)=>{
      console.log(res)
    })
  }

  useEffect(()=>{

    apiTest();
  },[])

  return (
    <>
      <h1 className=''>React App</h1>
    </>
  )
}

export default App
