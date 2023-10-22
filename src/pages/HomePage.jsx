import React from 'react'
import HeroSection from './homepage/HeroSection'
import TrendsSection from './homepage/TrendsSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>    
      <TrendsSection/>
      <div className='h-72 bg-slate-400'><p>alan 1</p></div>
      <div className='h-72 bg-slate-400'><p>alan 1</p></div>
    </div>
  )
}

export default HomePage
