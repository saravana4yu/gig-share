import React from "react";
import Cards from "./Cards";
import Storage from "./Storage";
import LastFile from "./LastFile";
import { IoMdNotificationsOutline, IoIosLogIn, IoMdSearch } from "react-icons/io";

function Overview() {
  return (
    <div className="bg-custom rounded-tr-[48px] rounded-br-[48px]">

    
    <div className="relative flex-grow py-16 px-10 bg-gray-200 rounded-[48px] shadow-lg w-full z-10" style={{ maxWidth: "1180px", minWidth: "1180px", maxHeight: "1000px", minHeight: "1000px" }}>

      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <h1 className="font-poppins text-3xl font-semibold">Overview</h1>
          <div className="font-josefin-sans bg-red-500 text-white mt-1.5 px-2 rounded-3xl">
            <span className="p-1">185 GB</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative mr-52">
            <input
              type="text"
              placeholder="Search something..."
              className="font-josefin-sans px-4 py-2 pl-10 bg-gray-200 rounded-xl focus:outline-none"
            />
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </div>
          <div className="outline outline-gray-300 outline-2 rounded-xl p-2.5">
            <IoMdNotificationsOutline className="text-gray-500 text-xl" />
          </div>
          <div className="outline outline-gray-300 outline-2 rounded-xl p-2.5">
            <IoIosLogIn className="text-gray-500 text-xl" />
          </div>
          <button className="bg-b h-11 font-josefin-sans text-white px-4 py-2 rounded-xl hover:bg-gray-800">
            Upgrade Plan
          </button>
        </div>
      </header>
      <main className="flex mt-12">
        <section className="flex-grow mr-6">
          <p className="font-poppin mt-10 text-5xl mb-8 font-bold" style={{ maxWidth: "350px" }}>Manage your folders</p>
          <p className="font-josefin-sans mt-10 mr-10 text-gray-600 text-xl " style={{ maxWidth: "350px" }}>
            Create folders to sort files and have quick access to documents
          </p>
        </section>
        <section >
          <Cards className=""/>
        </section>
      </main>
      <section className="mt-10">
        <div className="flex justify-between">
          <Storage />
          <LastFile />
        </div>
      </section>
    </div>
    </div>
  );
}

export default Overview;
