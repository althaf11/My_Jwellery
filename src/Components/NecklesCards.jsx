import React from 'react'
import NecklesData from './NecklesData'

const NecklesCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {NecklesData.map((card) => (
        <div key={card.id} className="border rounded-lg shadow-lg p-4 bg-white overflow-hidden">
          <img src={card.image} alt={card.title} className="w-full h-48 object-contain rounded-t-lg" />
          <h2 className="mt-4 text-lg font-semibold">{card.title}</h2>
          <p className="text-gray-600">{card.price}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            View More
          </button>
        </div>
      ))}
    </div>
  )
}

export default NecklesCards