import React from "react";

const WhyChooseUs = () => {
  // Sample data for the "Why Choose Us" cards
  const reasons = [
    {
      title: "High-Quality Materials",
      description: "We use only the finest materials to craft our jewelry, ensuring durability and elegance in every piece.",
      icon: "https://via.placeholder.com/50x50?text=1"
    },
    {
      title: "Unique Designs",
      description: "Our designs are exclusive and crafted by skilled artisans to offer pieces you won't find anywhere else.",
      icon: "https://via.placeholder.com/50x50?text=2"
    },
    {
      title: "Affordable Luxury",
      description: "We offer high-end jewelry at prices that fit your budget, so you can enjoy luxury without compromise.",
      icon: "https://via.placeholder.com/50x50?text=3"
    },
    {
      title: "Customer Satisfaction",
      description: "Our customers are our top priority. We offer personalized service to ensure you're completely satisfied with your purchase.",
      icon: "https://via.placeholder.com/50x50?text=4"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Icon */}
              <div className="mb-4">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="mx-auto mb-4 w-16 h-16 object-cover"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-semibold text-gray-800">{reason.title}</h3>

              {/* Card Description */}
              <p className="text-gray-600 mt-2">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
