import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SM</h2>
          <p className="text-sm leading-6 opacity-90">
            We create unforgettable experiences — from weddings to corporate 
            events, conferences, and award ceremonies. Let us make your 
            moments truly special.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#services" className="hover:underline">Our Services</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>Mumbai, India</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+91 999999999</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>info@SM.com</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="p-2 bg-white text-purple-700 rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white text-pink-600 rounded-full hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-white text-sky-500 rounded-full hover:scale-110 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} SM. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
