import React, { useEffect } from 'react'
import HeroSection from './homepage/HeroSection'
import TrendsSection from './homepage/TrendsSection'
import PopularSection from './homepage/PopularSection'
import TopRatedSection from './homepage/TopRatedSection'

const HomePage = () => {

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })
  return (
    <div>
      <HeroSection/>    
      <TrendsSection/>
      <PopularSection/>
      <TopRatedSection/>
    </div>
  )
}

export default HomePage
