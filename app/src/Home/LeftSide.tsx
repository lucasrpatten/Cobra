import React from "react";
import { Link } from "react-router-dom";

interface Properties {}

const LeftSide = (props: Properties) => {
  return (
    <>
      <div
        className={
          "relative float-left grid-container left-0 inline-grid w-1/3 h-screen bg-zinc-900"
        }
      >
        <Link to="/playground">afhsdj</Link>
      </div>
    </>
  );
};
export default LeftSide;
