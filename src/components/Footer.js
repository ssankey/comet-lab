import React from 'react'
import logo from '../assets/footer-logo.svg'
const Footer = () => {
  return (
    <div className='bg-[#152f2e] flex sm:flex-row flex-col justify-center sm:justify-around items-center'>
        <div className='p-5 text-center items-center'>
            <img src={logo} className='w-[8rem]' alt='logo'/>
        </div>
        <div className='text-md  text-stone-400 '>
            <p>© 2020 Insert Name Here. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer