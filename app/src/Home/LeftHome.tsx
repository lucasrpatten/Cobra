import React from "react";
import ModuleButton from "./ModuleButton";
import PythonBasicsNav from "./RightPanel/PythonBasicsNav";
import RightHome from "./RightPanel/RightHome";
import { Link, useNavigate } from "react-router-dom";

import PyGymHome from "./RightPanel/PyGymHome";
import AIChat from "./RightPanel/AIChat";

interface Properties {
  updateRightSide: any;
}
const LeftSide: React.FC<Properties> = (props: Properties) => {
  return (
    <>
      <div
        className={
          "bg-dark-gray border-4 border-teal relative float-left grid-container left-0 inline-grid w-1/3 h-screen"
        }
      >
        <Link to="/">
          <ModuleButton title="Log Out" page={<RightHome />} passChildData={props.updateRightSide} />
        </Link>
        <Link to="/Home">
          <ModuleButton title="Home" page={<RightHome />} passChildData={props.updateRightSide} />
        </Link>
        <ModuleButton title="Python Basics" page={<PythonBasicsNav />} passChildData={props.updateRightSide} />
        <ModuleButton title="PyGYM" page={<PyGymHome />} passChildData={props.updateRightSide} />
        <ModuleButton title="AI Chat" page={<AIChat />} passChildData={props.updateRightSide} />
      </div>
    </>
  );
};
export default LeftSide;