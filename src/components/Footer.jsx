import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-[#020c1b]'>
      <div className='my-5 xs:w-full lg:w-1/2 '>
        <ul className='flex justify-evenly'>
          <li>Terms of Use</li>
          <li>Privacy Police</li>
          <li>About</li>
          <li>Blog</li>
          <li>FAQ</li>
        </ul>

      </div>
      
      <div className='text-center mx-5'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam corrupti quos atque doloremque eligendi! Officiis ea tempora ab cupiditate, voluptatum sunt enim est omnis, fugiat sint nam suscipit exercitationem quasi.
        Earum cum dolorum, itaque in sint illum modi fugiat? Corporis iusto, fugiat facilis, quaerat ea odit in eligendi sapiente ducimus illo impedit, sequi tempore quam cum! Animi laudantium non et?
        Dolorum nulla accusamus hic veritatis consectetur ipsa quia ad, tempore tenetur ipsum perspiciatis provident a cum optio. Et illo vel officia dolores expedita iure laboriosam natus illum repellendus magni. Est.
        Obcaecati dolore earum, temporibus dignissimos eum id beatae cupiditate voluptates dolores excepturi reiciendis adipiscir</p>
      </div>

      <div className='my-6 xs:w-1/2 lg:w-1/4 flex justify-evenly mb-5'>

        <i className='fa-brands fa-facebook hover:text-blue-500 text-xl'></i>
        <i className='fa-brands fa-twitter hover:text-cyan-500 text-xl'></i>
        <i className='fa-brands fa-instagram hover:text-purple-500 text-xl'></i>
        <i className='fa-brands fa-linkedin hover:text-blue-500 text-xl'></i>

      </div>
    </div>
  )
}

export default Footer
