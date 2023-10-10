import { useState,useEffect } from 'react'
import { fetchData } from './api/Api'
import './App.css'
//import { useSelector} from 'react-redux/es/hooks/useSelector'
import { useDispatch,useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import { Routes,Route } from 'react-router-dom'

function App() {

  const {url}=useSelector((state)=>state.home)
  const dispatch=useDispatch();

  const apiTest=()=>{
    fetchData('/movie/popular')
    .then((res)=>{
      console.log(res)
      dispatch(getApiConfiguration(res))
    })
  }

  useEffect(()=>{

    apiTest();
  },[])

  return (
    <>
      <h1 className=''>React App</h1>
      
      <Routes>

        <Route path='' element={} />
        <Route path='' element={} />
        <Route path='' element={} />
        <Route path='' element={} />
        <Route path='' element={} />
        
      </Routes>
    </>
  )
}

export default App
