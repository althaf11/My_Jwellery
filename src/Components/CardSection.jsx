// import React from "react";

// const CardSection = () => {
//   // Sample data for the cards
//   const cards = [
//     { image: "https://via.placeholder.com/300x200?text=Jewelry+1", title: "Elegant Necklace" },
//     { image: "https://via.placeholder.com/300x200?text=Jewelry+2", title: "Gleaming Earrings" },
//     { image: "https://via.placeholder.com/300x200?text=Jewelry+3", title: "Luxury Bracelet" },
//     { image: "https://via.placeholder.com/300x200?text=Jewelry+4", title: "Diamond Ring" },
//     { image: "https://via.placeholder.com/300x200?text=Jewelry+5", title: "Gold Necklace" },
//     { image: "https://via.placeholder.com/300x200?text=Jewelry+6", title: "Silver Earrings" },
//     { image: "https://via.placeholder.com/300x200?text=Jewelry+7", title: "Sapphire Bracelet" },
//     { image: "https://via.placeholder.com/300x200?text=Jewelry+8", title: "Emerald Ring" },
//   ];

//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
//           Our Exclusive Jewelry Collection
//         </h2>

//         {/* Cards Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Card Image */}
//               <div className="w-full h-48 sm:h-56 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }}></div>

//               {/* Card Title */}
//               <div className="py-4 text-center bg-gray-50">
//                 <h3 className="text-lg font-medium text-gray-800">{card.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardSection;


// JewelryCard.js
import React from 'react';
// import Card from '../assets/Card'
import {  Link } from "react-router-dom";
import BangleCards from './BangleCards'
import NecklesCards from './NecklesCards';
import EarRingsCards from './EarRingsCards';
import  RingsCards  from './RingsCards';
import VaddanamCards from './VaddanamCards';
const CardSection = () => {
  // const navigate=useNavigate();
  return (
    <>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
    <div className='m-8 px-8'>
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src='../public/Card/Bangles.jpg'
        alt='no'
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">Bangles</span>
       <Link to='/BangleCards'>
         <button className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-500" >
       
            View More
            
          </button>
          </Link>
         
        </div>
      </div>
    </div>
    </div>
    <div className='m-8 px-8'>
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src='../public/Card/Neckles.jpg'
        alt='no'
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">Neckles</span>
          <Link to='/NecklesCards'>
          <button className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-500">
            View More
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    <div className='m-8 px-8'>
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src='../public/Card/EarRings.png'
        alt='no'
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900 m-2">EarRings</span>
          <Link to='/EarRingsCards'>
          <button className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-500">
            View More
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
   
    

    <div className='m-8 px-8'>
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src='../public/Card/r1.jpg'
        alt='no'
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900 m-2">Rings</span>
          <Link to='/RingsCards'>
          <button className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-500">
            View More
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    

    <div className='m-8 px-8'>
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src='../public/Card/v1.jpg'
        alt='no'
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900 m-2">Vaddanam</span>
          <Link to='/VaddanamCards'>
          <button className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-500">
            View More
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
    
  );
};

export default CardSection;
