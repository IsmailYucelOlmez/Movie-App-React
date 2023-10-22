import { useState,useEffect } from 'react'
import { fetchData } from './api/Api'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import DetailsPage from './pages/DetailsPage'
import NotFound from './pages/NotFound'
import SearchResult from './pages/SearchResult'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  const {url}=useSelector((state)=>state.home)
  const dispatch=useDispatch();

  const apiConfiguration=()=>{
    fetchData('/configuration')
    .then((res)=>{

      const url={
        backdrop:res.images.secure_base_url+"original",
        poster:res.images.secure_base_url+"original",
        profile:res.images.secure_base_url+"original",

      };

      dispatch(getApiConfiguration(url))
    })
  }

  useEffect(()=>{

    apiConfiguration();
    callGenres();
  },[])

  const callGenres=async()=>{
    let promises=[];
    let endpoints=["tv","movie"];
    let allGenres={};

    for(let element of endpoints){
      promises.push(fetchData(`/genre/${element}/list`))
    }

    const data=await Promise.all(promises);

    data.map(({genres})=>{
      return genres.map((genre)=>{
        allGenres[genre.id]=genre.name

      })
    })

    dispatch(getGenres(allGenres))

  }

  return (
    <>
      <Header/>
      
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/:mediaType/:id' element={<DetailsPage/>} />
        <Route path='/explore/:mediaType' element={<ExplorePage/>} />
        <Route path='/search/:query' element={<SearchResult/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>

      <Footer/>
    </>
  )
}

export default App
