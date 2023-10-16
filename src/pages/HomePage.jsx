import React from 'react'
import HeroSection from './homepage/HeroSection'
import TrendsSection from './homepage/TrendsSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <div className='h-16 bg-slate-600'>margin field</div>
      <TrendsSection/>
      <div className='h-72 bg-slate-400'><p>alan 1</p></div>
      <div className='h-72 bg-slate-400'><p>alan 1</p></div>
    </div>
  )
}

export default HomePage
