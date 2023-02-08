import React, {useState} from "react";
import {Link} from "react-router-dom";
import ModuleButton from "./ModuleButton";
import PythonBasicsNav from "./RightPanel/PythonBasicsNav";
import RightHome from "./RightPanel/RightHome";

interface Properties {
  updateRightSide: any;
}

const LeftSide = (props: Properties) => {
  return (
    <>
      <div
        className={
          "relative float-left grid-container left-0 inline-grid w-1/3 h-screen bg-zinc-900"
        }
      >
        <ModuleButton title="Home" page={<RightHome />} passChildData={props.updateRightSide} />
        <ModuleButton title="Python Basics" page={<PythonBasicsNav />} passChildData={props.updateRightSide} />
      </div>
    </>
  );
};
export default LeftSide;