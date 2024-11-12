import React from 'react'
import BangleCards from './BangleCards'
import { Link } from 'react-router-dom'
const LatestProducts = () => {
  return (
    <>
    <center>
    <h2 className="text-3xl font-semibold text-gray-800">
          Our Most Selling Products
        </h2>
    </center>
    {/* <div className='flex '>
        
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
    </div> */}
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
    <div className=" m-8 px-8">
     
        <div  className="border rounded-lg shadow-lg p-4 bg-white overflow-hidden">
          <img src='./public/Card/b1.jpg' alt='no' className="w-full h-48 object-contain rounded-t-lg" />
        <div className='flex'>
        <h2 className="mt-4 md:ml-0 lg:ml-10 text-lg font-semibold">Bangles</h2>
          <p className="mt-4 md:ml-2 lg:ml-10 text-gray-600">$400</p>
          <Link to='BangleCards'> 
          <button className="mt-4 lg:ml-6 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            View More
          </button>
          </Link>
        </div>
        </div>
     
    </div>

    <div className="m-8 px-8 ">
     
        <div  className="border rounded-lg shadow-lg p-4 bg-white overflow-hidden">
          <img src='./public/Card/n1.jpg' alt='no' className="w-full h-48 object-contain rounded-t-lg" />
         <div className='flex'>
         <h2 className="mt-4 md:ml-1 lg:ml-10 text-lg font-semibold">Neckles</h2>
          <p className="mt-4 md:ml-2 lg:ml-10 text-gray-600">$400</p>
          <Link to='NecklesCards'>
          <button className="mt-4 lg:ml-6 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            View More
          </button>
          </Link>
         </div>
        </div>
     
    </div>


    <div className="m-8 px-8">
     
        <div  className="border rounded-lg shadow-lg p-4 bg-white overflow-hidden">
          <img src='./public/Card/e1.jpg' alt='no' className="w-full h-48 object-contain rounded-t-lg" />
          <div className='flex'>
          <h2 className="mt-4 md:ml-1 lg:ml-10  text-lg font-semibold">EarRings</h2>
          <p className="mt-4 md:ml-2 lg:ml-10 text-gray-600">$400</p>
          <Link to='EarRingsCards'>
          <button className="mt-4 md:ml-4 lg:ml-6 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            View More
          </button>
          </Link>
          </div>
        </div>
     
    </div>
    </div>
    </>
  )
}

export default LatestProducts;