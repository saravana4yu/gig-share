import React from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="flex flex-row w-max bg-gray-400 p-16">
      <Sidebar />
      <Overview />
    </div>
  );
}

export default App;
