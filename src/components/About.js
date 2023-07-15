import React from 'react'
import aboutHero from '../assets/aboutHero.jpg'
import { Fade, Slide } from 'react-awesome-reveal'

const About = () => {
  return (
      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <Fade direction='right'>
          <div className="box-border flex flex-col-reverse items-center px-5  justify-around mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl ">

              <div className="box-border relative w-full bg-slate-600 max-w-md mx-auto mt-5 mb-4  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-3/5">
                  <img  src={aboutHero} className='mx-auto w-full  ' alt='about' />
              </div>

              <div className="box-border order-first w-full  border-solid md:w-1/2 md:pl-10 md:order-none">
                  <p className="m-0 text-[18px] text-[#00c2c5] font-extrabold leading-tight border-0 border-gray-300">
                      About
                  </p>
                  <h1 className="pt-4 pb-8 m-0 leading-7 font-semibold  border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-4xl text-3xl">
                        Some more information about your business
                  </h1>
                  <p className='text-gray-400'>Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.</p>
                  
              </div>
          </div>
          </Fade>
      </section>
  )
}

export default About