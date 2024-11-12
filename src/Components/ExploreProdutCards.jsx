import React from 'react'
import ExploreProductData from './ExploreProdutCardsData'

const ExploreProdutCards = () => {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {ExploreProductData.map((card) => (
        <div key={card.id} className="border rounded-lg shadow-lg p-4 bg-white " >
          <img src={card.image} alt={card.title} className="w-full h-48 object-contain rounded-t-lg" />
          <div className='flex'>
          <h2 className="mt-4 text-lg font-semibold">{card.title}</h2>
          <p className="mt-4 ml-10 text-gray-600">{card.price}</p>
          <button className="mt-4 ml-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            View More
          </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExploreProdutCards




// import React from 'react'
// // import {shuffledItems} from './ExploreProdutCardsData';
// import { BanglesData } from './BanglesData';
// import { EarRingsData } from './EarRingsData';
// import { NecklesData } from './NecklesData';
// import {RingsData} from './RingsData';
// import {VaddanamData} from './VaddanamData';
// const ExploreProdutCards = () => {
//   // const allItems = [...BanglesData, ...EarRingsData, ...NecklesData, ...RingsData, ...VaddanamData];
//   const combinedItems = [...BanglesData, ...EarRingsData, ...NecklesData, ...RingsData, ...VaddanamData];
//   const shuffledItems = combinedItems.sort(() => Math.random() - 0.5);
//   return (
//     <div>
//     {shuffledItems.map((item, index) => (
//       <div key={index}>
//         <h3>{item.title}</h3>
//         <p>{item.description}</p>
//         {/* Render other properties as needed */}
//       </div>
//     ))}
//   </div>
//   )
// }

// export default ExploreProdutCards