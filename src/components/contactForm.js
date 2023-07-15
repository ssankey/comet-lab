import React from 'react'
import Heart from '../assets/heart.svg'
import Computer from '../assets/computer.svg'
import Medal from '../assets/medal.svg'
import { Bounce, Fade, Hinge, Roll, Slide } from "react-awesome-reveal";

const contactForm = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row '>
        <div className='flex flex-col my-8 sm:w-3/5'>
            <Fade cascade>
            <div className='flex p-5 justify-start items-start sm:w-4/5  mx-auto'>
                <img src={Heart} className='p-3' alt='benefit-1' />
                <div className='flex flex-col  p-5'>
                    <h3 className=' font-black text-xl '>Benefit 1</h3>
                    <p className=' text-gray-400 '>Highlight the benefits of signing up for an appointment, online class, or video consultation.</p>
                </div>
            </div>
            <div className='flex p-5 justify-start items-start mx-auto sm:w-4/5  '>
                <img src={Computer} className='p-3' alt='benefit-1' />
                <div className='flex flex-col p-5'>
                    <h3 className=' font-black text-xl '>Benefit 2</h3>
                    <p className=' text-gray-400 '>For example, fitness instructors might describe how their routines make people healthier *and* happier.</p>
                </div>
            </div>
            <div className='flex p-5 justify-start items-start mx-auto sm:w-4/5 '>
                <img src={Medal} className='p-3' alt='benefit-1' />
                <div className='flex flex-col p-5'>
                    <h3 className=' font-black text-xl '>Benefit 3</h3>
                    <p className=' text-gray-400'>Remind visitors how easy it is to claim your offer and start enjoying the benefits.</p>
                </div>
            </div>
            </Fade>
        </div>
        <div className=' mx-auto w-[95%] sm:w-2/5 mt-[-10rem]'>
        <Slide direction='right'>
            <div className='sm:w-[450px] text-center mx-auto  bg-[#152f2e] p-6'>
                <h1 className='text-4xl font-extrabold text-white p-5'>Schedule an <br/> Appointment</h1>
                <p className='text-white text-md px-8 py-5'>Here, let visitors know what will happen when they complete your form.</p>
            <div className='flex flex-col'>
                <input className='mb-3 w-5/6 rounded-lg mx-auto p-3 mt-5' type="text" name="username" id="username" placeholder="First Name*"/>
                <input className='mb-3 w-5/6 rounded-lg mx-auto p-3 mt-5' type="text" name="username" id="username" placeholder="Last Name*"/>
                <input className='mb-3 w-5/6 rounded-lg mx-auto p-3 mt-5' type="text" name="username" id="username" placeholder="Email*"/>
                <input className='mb-3 w-5/6 rounded-lg mx-auto p-3 mt-5' type="text" name="username" id="username" placeholder="Phone Number*"/>
                <select className='mb-3 w-5/6 rounded-lg mx-auto p-3 mt-5' placeholder='Type Of Appointment'>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                </select>
                <button className='mb-3 w-5/6 rounded-lg text-white font-extrabold text-lg mx-auto py-3 px-5 mt-5 bg-[#00c2c5]'>Schedule Now</button>
            </div>
            </div>
        </Slide>
        </div>
    </div>
  )
}

export default contactForm