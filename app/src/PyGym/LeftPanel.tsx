
import React from "react";
import { useNavigate } from "react-router-dom";

interface PanelProperties {
  instructions: string;
}

const LeftPanel: React.FC<PanelProperties> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-5 absolute left-0 h-full overflow-x-hidden w-1/3 bg-gray-900 text-gray-300">
        <h1 className="text-xl underline">Instructions: </h1>
        <div className="text-lg">{props.instructions}</div>
        <div className="absolute bottom-0 w-full">
            <button className="w-1/2 bg-red" onClick={() => navigate("/Home")}>
              Exit
            </button>
            <button className="w-1/2 bg-teal" onClick={() => window.location.reload()}>
              Reset
            </button>
        </div>
      </div>
    </>
  );
};
export default LeftPanel;
