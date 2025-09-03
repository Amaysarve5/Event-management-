import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About us" },
    { id: "workgallery", label: "Work Gallery" },
    { id: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`Navbar flex justify-around items-center px-8 py-4 shadow-md fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-white"
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <h1 className="text-2xl font-bold text-[#000000]">SM</h1>
      </div>

      {/* Menu */}
      <div className="nav-list">
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-[#000000] font-semibold"
                  : "hover:text-[#000000]"
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="request-quote hidden md:block">
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Request Quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
