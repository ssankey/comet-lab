import React from 'react'
import '../App.css'
import logo from '../assets/logo.svg'
const Banner = () => {
  return (
    <div className='h-screen banner '>
        <div className='container items-center sm:max-w-6xl px-14 mx-auto xl:px-5 py-5'>
            <img src={logo} alt='logo'/>
        </div>
      <section class="px-5  sm:py-32 md:px-0 ">
          <div class="container items-center  max-w-6xl px-8 mx-auto xl:px-5">
              <div class="flex flex-wrap items-center sm:-mx-3">
                  <div class="w-full md:w-1/2 md:px-3 text-reveal">
                      <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                          <h1 class="text-4xl font-extrabold text-[#152f2e] sm:text-6xl">
                              <span class="block xl:inline">Describe the </span>
                              <span class="block xl:inline">value of booking </span>
                              <span class="block xl:inline">an appointment</span>
                          </h1>
                          <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  
  )
}

export default Banner