import React from "react";
import IDE from "../IDE/IDE";
import problems from "./problems";
import { useNavigate } from "react-router-dom";
import Challenge from "./Challenge";

const problem = problems.print_argument;

interface PanelProperties {
  instructions: string;
}

const LeftPanel: React.FC<PanelProperties> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute left-0 h-full overflow-x-hidden w-1/3">
        {props.instructions}
        <button onClick={() => window.location.reload()}>Reset</button>
        <button onClick={() => navigate("/Home")}>Exit</button>
      </div>
    </>
  );
};
export default LeftPanel;
