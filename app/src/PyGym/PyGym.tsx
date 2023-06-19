import React from "react";
import IDE from "../IDE/IDE";
import problems from "./problems.json";
import { useNavigate } from "react-router-dom";
import Challenge from "./Challenge";

const problem = problems[0];

const { ipcRenderer } = window.require("electron");
const Playground = () => {
  return (
    <>
      <Challenge problem={problem}/>
    </>
  );
};
export default Playground;
