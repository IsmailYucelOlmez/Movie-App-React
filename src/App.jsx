import { useState,useEffect } from 'react'
import { fetchData } from './api/Api'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import DetailsPage from './pages/DetailsPage'
import NotFound from './pages/NotFound'
import SearchResult from './pages/SearchResult'


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

        <Route path='/' element={<HomePage/>} />
        <Route path='/:mediaType/:id' element={<DetailsPage/>} />
        <Route path='/explore/:mediaType' element={<ExplorePage/>} />
        <Route path='/search/:query' element={<SearchResult/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </>
  )
}

export default App
