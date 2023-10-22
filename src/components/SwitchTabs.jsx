import React, { useState } from 'react'

const SwitchTabs = ({endpoint,onTabChange}) => {

  return (
    <div className='xs:w-28 lg:w-32 relative bg-white text-black xs:h-7 lg:h-8 rounded-xl flex justify-between items-center' onClick={onTabChange}>

      <div className='w-1/2 flex justify-center items-center' >

        <p className={`z-20 ${endpoint=="day" ? 'text-white':"" } `}>Day</p>

      </div>
      <div className='w-1/2 flex justify-center items-center'>

        <p className={`z-20 ${endpoint=="week" ? 'text-white':"" } `}>Week</p>

      </div>

      <div className={`absolute ${endpoint=="day" ? 'left-0': 'left-1/2'} w-1/2 h-full rounded-[inherit] bg-gradient-to-r from-orange-400 to-red-400`}></div>
    </div>
  )
}

export default SwitchTabs
