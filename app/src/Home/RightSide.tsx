import React from "react";

const RightSide = () => {
  return (
    <>
      <div className="w-2/3 h-screen relative float-right bg-green-300 inline-grid grid-rows-6">
        <span />
        <span />
        <div className="text-center relative bottom-0">
          Welcome {localStorage.getItem("user")}
        </div>
        <div>yo</div>
      </div>
    </>
  );
};
export default RightSide;
