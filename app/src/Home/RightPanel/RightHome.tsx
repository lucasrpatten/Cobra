import React from "react";
import snekMascot from "../../Login/snakeLogo.svg";
import { Link } from "react-router-dom";

const RightHome: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white w-full h-screen relative float-right">
        <div className="text-center align-middle col-span-8 row-start-1 col-start-3 relative min-h-[50px]">
          <div className="mt-14 w-full bottom-0 left-0 text-4xl font-black font-mono">
            Welcome to your dashboard: <br/> <span className="text-red uppercase">{localStorage.getItem("user")}</span>
          </div>
        </div>
        <img
          src={snekMascot}
          alt=""
          className="w-1/2 hidden sm:block"
        />
        <Link className="duration-300 hover:bg-dark-gray hover:text-teal border-4 border-teal px-5 py-2 bg-teal text-dark-gray font-bold rounded-xl" to="/playground">Start PyGame</Link>
      </div>
    </>
  );
};
export default RightHome;
