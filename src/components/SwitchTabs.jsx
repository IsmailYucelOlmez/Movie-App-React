import React, { useState } from 'react'

const SwitchTabs = ({endpoint,onTabChange,options}) => {

  console.log(options)

  return (
    <div className='xs:w-28 lg:w-32 relative xs:text-sm lg:text-lg bg-white text-black xs:h-7 lg:h-8 rounded-xl flex justify-between items-center' onClick={onTabChange}>

      {options?.map((option,i)=>(

        <div key={i} className='w-1/2 flex justify-center items-center' >

        <p className={`z-20 ${endpoint==option ? 'text-white':"" } ${option=="tv" ? 'uppercase':"capitalize" } `}>{option}</p>

        </div>

      ))}
      
      {/* <div className='w-1/2 flex justify-center items-center'>

        <p className={`z-20 ${endpoint=="week" ? 'text-white':"" } `}>Week</p>

      </div> */}

      <div className={`absolute ${endpoint==options[0] ? 'left-0': 'left-1/2'} w-1/2 h-full rounded-[inherit] bg-gradient-to-r from-orange-400 to-red-400`}></div>
    </div>
  )
}

export default SwitchTabs
