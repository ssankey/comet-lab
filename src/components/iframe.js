import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

const Iframe = () => {
  return (
    <div className='sm:mt-[10rem] '>
      <div className='flex justify-center  bg-[#e8fbfb] items-center pt-[5rem] sm:pb-60 pb-20 sm:pt-[10rem] flex-col text-center'>
          <h1 className=' text-3xl sm:text-6xl p-5 font-black'>Show visitors what <br/>they're signing up for</h1>
          <p className='p-10'>Include a video or photo from one of your sessions to help people <br/> understand your service (or just to hype ‘em up).  </p>
      </div>
      <Fade triggerOnce direction='up'>
      <div className='flex justify-center items-center z-50 flex-col mt-[-5rem] sm:mt-[-20rem]'>
            <img alt='iframe' src="https://embed-ssl.wistia.com/deliveries/29da46dbc01985d85354fde8c733a9b2.jpg?image_play_button_size=2x&amp;image_crop_resized=960x541&amp;image_play_button=1&amp;image_play_button_color=00c2c5e0" className='w-full sm:p-[10rem] p-8 h-auto' />
      </div>
      </Fade>
    </div>
  )
}

export default Iframe