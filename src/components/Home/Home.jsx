import React, { useState, useEffect } from 'react';
import event1 from '../../assets/event_img/pngtree-new-event-management-outdoor-background-image_15957681.jpg';
import event2 from '../../assets/event_img/wp10715768.jpg'; // add more images
import event3 from '../../assets/event_img/desktop-wallpaper-corporate-event-management-company-lahore.jpg';

const images = [event1,event2,event3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div id='home' className="relative w-screen h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-screen object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Our Event</h1>
        <p className="text-lg md:text-2xl text-white mb-8">Join us for an unforgettable experience!</p>
        <button id="contact" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Let's talk send a message
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 flex justify-center w-full space-x-3">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === idx ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
