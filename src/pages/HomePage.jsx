import React from 'react'
import HeroSection from './homepage/HeroSection'
import TrendsSection from './homepage/TrendsSection'
import PopularSection from './homepage/PopularSection'
import TopRatedSection from './homepage/TopRatedSection'

const HomePage = () => {
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
