import React from "react";
import IDE from "../IDE/IDE";
import problems from "./problems";
import { useNavigate } from "react-router-dom";
import Challenge from "./Challenge";

const problem = problems.print_argument;

const { ipcRenderer } = window.require("electron");

interface Properties {
   test_cases: any[]
}

const TestCase = () => {

}

const TestCases = () => {
  return (
    <>
      <div className="bottom-0 fixed w-full bg-green-700 h-1/3">
        hey there
      </div>
    </>
  );
};
export default TestCases;
