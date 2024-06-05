import React from "react";
import { PiFileDocFill, PiFileJpgFill, PiFilePdfFill, PiFileZipFill } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";

const files = [
  { name: "Travel Images.psd", date: "Nov 7, 2021", collaborators: 9, color: "#8cb7a1", icon: <PiFileDocFill /> },
  { name: "True Photos.jpg", date: "Nov 8, 2021", collaborators: 3, color: "#4d4e8a", icon: <PiFileJpgFill /> },
  { name: "Dashboard Struct.pdf", date: "Nov 9, 2021", collaborators: 10, color: "#fb5644", icon: <PiFilePdfFill /> },
  { name: "Character Illustration.zip", date: "Nov 9, 2021", collaborators: 2, color: "#422e2b", icon: <PiFileZipFill /> },
];

const avatarImages = [
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
];

function LastFile() {
  return (
    <div className="bg-white mt-12 p-6 rounded-2xl shadow-md w-full relative" style={{ maxHeight: "450px", minHeight: "450px" }}>
      <div className="flex justify-between mx-3 mb-3">
        <h3 className="font-poppins text-xl font-semibold">Last File</h3>
        <div className="outline outline-gray-200 outline-2 h-5 w-5 rounded-sm">
          <FaAngleDown className="text-gray-500 text-xl" />
        </div>
      </div>
      <hr className="mt-8 mx-3"></hr>
      <ul className="mt-10 mx-3">
        {files.map((file) => (
          <li className="flex items-center  mb-10" key={file.name}>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-2 rounded-lg text-2xl text-white" style={{ backgroundColor: file.color }}>
                {file.icon}
              </div>
              <div>
                <p className="font-josefin-sans text-gray-800 font-large" style={{ maxWidth: "240px", minWidth: "240px" }}>{file.name}</p>
              </div>
            </div>
            <div className="flex -space-x-1 overflow-hidden" style={{ maxWidth: "240px", minWidth: "240px" }}>
              {file.collaborators <= 3 ? (
                Array.from({ length: file.collaborators }).map((_, index) => (
                  <img
                    key={index}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={avatarImages[index % avatarImages.length]}
                    alt=""
                  />
                ))
              ) : (
                <>
                  {Array.from({ length: 2 }).map((_, index) => (
                    <img
                      key={index}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={avatarImages[index % avatarImages.length]}
                      alt=""
                    />
                  ))}
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-gray-700 text-xs">
                    +{file.collaborators - 2}
                  </div>
                </>
              )}
            </div>
            <p className="font-josefin-sans text-gray-500 text-sm  whitespace-nowrap">{file.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LastFile;
