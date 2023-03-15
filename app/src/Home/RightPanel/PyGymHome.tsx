import React from "react";
import snekMascot from "../snake.svg";
import { Link } from "react-router-dom";

const PyGymHome: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen relative float-right bg-green-300 inline-grid grid-rows-2 grid-cols-12">
        <div className="text-center align-middle col-span-8 row-start-1 col-start-3 relative min-h-[50px]">
          <div className="text-white absolute w-full bottom-0 left-0 text-4xl font-black font-mono">
          <Link to="/playground">Click Here For Our AI To Pick A Challenge For You</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default PyGymHome;
