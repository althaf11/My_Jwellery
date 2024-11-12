import React from 'react'
import BanglesData from './BanglesData'

const BangleCards = () => {
  return (
    <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-4">
      {BanglesData.map((card) => (
        <div key={card.id} className="border rounded-lg shadow-lg p-4 bg-white overflow-hidden">
          <img src={card.image} alt={card.title} className="w-full h-48 object-contain rounded-t-lg" />
          <div className='flex'>
          <h2 className="mt-4 text-lg font-semibold">{card.title}</h2>
          <p className="ml-10 mt-4 text-gray-600">{card.price}</p>
          <button className="mt-4 ml-10 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            View More
          </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BangleCards