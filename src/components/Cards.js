
import React from "react";
import g from '../g.png';
import b from '../b.png'
import { BsThreeDotsVertical } from "react-icons/bs";


const cards = [
  { id: "01", name: "Marketing", size: "124 MB", color: "#8bb8a3",menu:<BsThreeDotsVertical />, icon: b},
  { id: "02", name: "Branding", size: "124 MB", color: "#4d4e8e",menu: <BsThreeDotsVertical />, icon: g},
];

function Cards() {
  return (
    <div className="flex space-x-12 absolute right-0 -mr-9 ">
      <div className="bg-gray-200 p-6 rounded-3xl flex items-center justify-center outline-dashed outline-2 outline-gray-400 " style={{ minWidth: "50px", height: "250px"}}>
        <span className="text-gray-500 text-2xl">+</span>
      </div>

      {cards.map((card) => (
        <div className="p-8 rounded-[30px] flex flex-col justify-between shadow-2xl" style={{ backgroundColor: card.color, minWidth: "180px", maxWidth: "180px", height: "250px"}}>
          <div className="flex flex-row justify-between">
            <h3 className="font-josefin-sans text-white text-xl">{card.id}</h3>
            <div className="text-white text-lg" >{card.menu}</div>
            </div>
          <div>
            <img src={card.icon} alt="Card Icon" className="w-15 h-15 mb-4" />
            <h3 className="font-poppins text-white text-xl">{card.name}</h3>
            <p className="font-josefin-sans text-gray-200">{card.size}</p>
          </div>
        </div>
      ))}
      <div className="p-8 rounded-[30px] flex flex-col justify-between shadow-2xl" style={{ backgroundColor: "#646c79", minWidth: "180px", maxWidth: "180px", height: "250px"}}>
      <div >
      </div>
      <div>
            <h3 className="font-poppins text-white text-xl">Your Gallery</h3>
          </div>
      </div>
      
    </div>
  );
}

export default Cards;
