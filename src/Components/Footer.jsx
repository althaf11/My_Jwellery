// import React from "react";

// const Footer = () => {
//   // Sample best-selling products
//   const bestSellingProducts = [
//     { name: "Elegant Necklace", link: "/product/elegant-necklace" },
//     { name: "Gold Ring", link: "/product/gold-ring" },
//     { name: "Diamond Earrings", link: "/product/diamond-earrings" },
//     { name: "Luxury Bracelet", link: "/product/luxury-bracelet" },
//   ];

//   return (
//     <footer className="bg-gray-900 text-white py-12 mt-16">
//       <div className="container mx-auto px-4">
//         {/* Shop Name */}
//         <div className="text-center mb-6">
//           <h1 className="text-4xl font-bold">Jewels & Co.</h1>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex justify-center space-x-6 mb-6">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
//             <i className="fab fa-facebook-f text-2xl"></i>
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
//             <i className="fab fa-instagram text-2xl"></i>
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
//             <i className="fab fa-twitter text-2xl"></i>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
//             <i className="fab fa-linkedin-in text-2xl"></i>
//           </a>
//         </div>

//         {/* Most Selling Products */}
//         <div className="text-center">
//           <h2 className="text-xl font-semibold mb-4">Most Selling Products</h2>
//           <ul className="space-y-2">
//             {bestSellingProducts.map((product, index) => (
//               <li key={index}>
//                 <a href={product.link} className="text-white hover:text-yellow-500">
//                   {product.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import {Link} from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const handleWhatsappClick = () => {
    window.open('https://wa.me/8790955587', '_blank'); // Replace '1234567890' with your WhatsApp number
  };

  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Centered Content Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl text-center md:text-left">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">Phone: +91 8790955587</p>
            <p className="text-gray-300">Email: bajipatan649@gmail.com</p>
            <button
              onClick={handleWhatsappClick}
              className="flex items-center justify-center md:justify-start text-green-500 mt-4 hover:underline"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp Us
            </button>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">
                <FaFacebookF size={24} />
              </a>
              <Link to="https://www.instagram.com/baji_gold_works/?igsh=MTZwZ3ptYzdkZTJ2Zw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                <FaInstagram size={24} />
              </Link>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Most Selling Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Best Sellers</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Diamond Necklace</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Gold Bracelet</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Sapphire Ring</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Pearl Earrings</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4 w-full">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Baji Jewelry Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

