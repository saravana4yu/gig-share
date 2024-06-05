import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

function Storage() {
  const data = {
    labels: ["Documents", "Images", "Videos", "Free"],
    datasets: [
      {
        data: [68, 55, 62, 315],
        backgroundColor: ["#e5d3a2", "#8bb8a3", "#4e4e8c", "#432e2d"],
        hoverBackgroundColor: ["#e5d3a2", "#8bb8a3", "#4e4e8c", "#432e2d"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '60%',
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  const values = [
    { name: "Documents", size: "68 GB", color:"#e5d3a6" },
    { name: "Images", size: "55 GB", color:"#89b6a1" },
    { name: "Videos", size: "66 GB",  color:"#4d4e8d" },
    { name: "Free", size: "315 GB", color:"#432d2d" },
  ];

  const totalStorage = 500;
  const usedStorage = 68 + 55 + 62;
  const percentageUsed = (usedStorage / totalStorage) * 100;

  return (
    <div className="bg-white p-6 mt-12 mr-16 rounded-2xl shadow-md relative" style={{ maxWidth: "350px", minWidth: "350px",  maxHeight: "450px", minHeight: "450px" }}>
      <div className="flex flex-row justify-between mr-4">
        <h3 className="font-poppins text-xl font-semibold mb-4">Storage</h3>
        <div className="bg-gray-100 h-5 w-5 rounded-sm" ><RiMenu4Fill className="text-gray-500 text-lg"/></div>
      </div>
      <div className="flex justify-center">
        <div className="relative mt-6 flex items-center justify-center w-40 h-40">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-black text-xl font-semibold">{`${Math.round(percentageUsed)}%`}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10 pl-6 text-center">
      {values.map((value) => (
            <div className="flex space-x-3">
              <div className="rounded-full mt-1.5 h-3 w-3" style={{ backgroundColor: value.color}}></div>
              {/*<div className=" bg-white rounded-full h-2 w-2"></div*/}
              
              <div className="flex flex-col place-items-start">
                <p className="font-josefin-sans text-gray-800 font-large">{value.name}</p>
                <p className="font-josefin-sans text-gray-500 font-sm">{value.size}</p>
              </div>
            </div>

        ))}
      </div>
    </div>
  );
};

export default Storage;
