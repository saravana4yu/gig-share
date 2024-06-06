import React, { useState } from "react";
import { FaFolder, FaSuitcase, FaTag, FaCog, FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

function Sidebar() {
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <div className="bg-custom rounded-tl-3xl rounded-bl-3xl text-white flex flex-col justify-between items-center pt-16 w-full h-full " style={{ maxWidth: "280px", minWidth: "280px", maxHeight: "1000px", minHeight: "1000px" }}>
      <div className="w-full flex flex-col items-center">
        <div>
          <div className="flex mb-10 items-center">
            <span className="h-6 w-3 rounded-tl-xl rounded-bl-xl bg-white relative"></span>
            <span className="h-6 w-6 rounded-full bg-white relative"></span>
            <span className="font-poppins text-2xl font-bold px-4 relative">gig share</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center mt-10">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBmYWNlfGVufDB8fDB8fHww" 
              className="rounded-full w-20 h-20 mb-6"
            />
            <div className="absolute bottom-6 right-0 w-6 h-6 bg-e rounded-full flex items-center justify-center">
                <span className="text-white text-xs p-1"><AiFillThunderbolt /></span>
            </div>

          </div>
          <h2 className="font-josefin-sans text-xl font-semibold">Jennifer Ross</h2>
        </div>
        <nav className="flex flex-col items-start w-full space-y-4 mt-24 px-16">
          <a href="#" className="font-josefin-sans flex items-center space-x-2 hover:text-gray-400 w-full">
            <FaSuitcase />
            <span>Dashboard</span>
          </a>
          <div className="relative w-full">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full hover:text-gray-400"
            >
              <div className="font-josefin-sans flex items-center space-x-2">
                <FaFolder />
                <span>Folders</span>
              </div>
              {isDropdown ? (
                <FaChevronUp className="transform transition-transform duration-200" />
              ) : (
                <FaChevronDown className="transform transition-transform duration-200" />
              )}
            </button>
            {isDropdown && (
              <div className="flex flex-col items-start w-full mt-2 space-y-2 px-4 py-0">
                <a href="#" className="font-josefin-sans flex items-center space-x-2 hover:text-gray-400 w-full">
                  <span className="h-2 w-2 bg-green-500"></span>
                  <span>Marketing</span>
                </a>
                <a href="#" className="font-josefin-sans flex items-center space-x-2 hover:text-gray-400 w-full">
                  <span className="h-2 w-2 bg-yellow-500"></span>
                  <span>Design</span>
                </a>
                <a href="#" className="font-josefin-sans flex items-center space-x-2 hover:text-gray-400 w-full">
                  <span className="h-2 w-2 bg-red-500"></span>
                  <span>Webflow</span>
                </a>
              </div>
            )}
          </div>
          <a href="#" className="font-josefin-sans flex items-center space-x-2 hover:text-gray-400 w-full">
            <FaTag />
            <span>Favorites</span>
          </a>
          <a href="#" className="font-josefin-sans flex items-center space-x-2 hover:text-gray-400 w-full">
            <FaCog />
            <span>Settings</span>
          </a>
        </nav>
      </div>
      <div className="w-full px-14 pb-16">
        <div className="relative border-dashed border-2 border-gray-700 rounded-xl p-4 h-48 flex flex-col items-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-4 h-full w-full flex flex-col items-center">
            <div className="font-josefin-sans text-white-400">Add files</div>
            <div className="font-josefin-sans text-gray-400 text-sm">Up to 20 GB</div>
            <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-700 absolute bottom-14">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
          
    </div>
  );
};

export default Sidebar;
