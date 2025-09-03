import React, { useState } from "react";
import { ServicesInfo } from "../../assets/all_product";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <>
      {/* Service Grid */}
      <div
        id="services"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 m-30"
      >
        {ServicesInfo.map((service) => (
          <div
            key={service.title}
            onClick={() => handleOpen(service)}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />

            {/* Service Title */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleClose} // close when clicking background
        >
          <div
            className="bg-white p-6 rounded-2xl max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center mb-6">
              {selectedService.title}
            </h2>

            {/* Multiple Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedService.moreImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${selectedService.title} ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
