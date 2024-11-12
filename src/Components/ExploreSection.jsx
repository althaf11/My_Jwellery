import React from "react";
import { Link } from "react-router-dom";
const ExploreSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gray-100">
      {/* Section Title */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          Discover Our Exclusive Jewelry Collection
        </h2>
        <p className="text-lg text-gray-600">
          Handcrafted with precision, each piece tells a story of luxury and elegance.
        </p>
        <p className="text-lg text-gray-600">
          From stunning necklaces to dazzling rings, explore a wide range of options.
        </p>
        <p className="text-lg text-gray-600">
          Elevate your style and celebrate every moment with our exquisite designs.
        </p>
      </div>

      {/* Explore Button */}
      <div className="mt-8">
        <Link
          to="/ExploreProductCards"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          Explore Our Products
        </Link>
      </div>
    </section>
  );
};

export default ExploreSection;
