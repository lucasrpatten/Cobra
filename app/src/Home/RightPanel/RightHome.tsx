import React from "react";
import snekMascot from "../snekMascot.svg";

const RightHome = () => {
  return (
    <>
      <div className="w-2/3 h-screen relative float-right bg-green-300 inline-grid grid-rows-6 grid-cols-12">
        <div className="text-center align-middle col-span-8 row-start-1 col-start-3 relative min-h-[50px]">
          <div className="absolute w-full bottom-0 left-0 text-4xl font-black font-mono">
            Welcome {localStorage.getItem("user")}
          </div>
        </div>

        <img
          src={snekMascot}
          alt=""
          className="row-start-2 w-full col-span-6 col-start-4 row-span-3 truncate"
        />
      </div>
    </>
  );
};
export default RightHome;
