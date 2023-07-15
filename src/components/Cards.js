import React from 'react'
import { cardsData } from '../Data/webdata'
const Cards = () => {
  return (
    <div className='flex flex-wrap items-center w-2xl sm:p-24 '>
      {cardsData.map((card) => (
        <div className="w-full md:w-[400px] px-6  md:px-4 mr-auto ml-auto -mt-78">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500">
            <img alt="..." src={card.image} className="w-full align-middle bg-contain bg-no-repeat rounded-t-lg" />
            <blockquote className="relative p-8 mb-4">
              <h4 className="text-xl font-bold text-white">
                {card.title}
              </h4>
              <p className="text-md font-light mt-2 text-white">
                {card.dec}
              </p>
            </blockquote>
          </div>
      </div>
      ))}
    </div>
  )
}

export default Cards