import React, { Suspense, lazy } from "react";
import IDE from "../IDE/IDE";
import problems from "./problems.json";
import { useNavigate } from "react-router-dom";
import Challenge from "./Challenge";
import { useParams } from "react-router-dom";
const { ipcRenderer } = window.require("electron");

const PyGym = () => {
  const { challengeID } = useParams();
  console.log(challengeID)
  const problem = problems.find(prob => prob.id === challengeID);
  console.log(problem)
  if (problem != undefined) {
    return (
      <>
        <Challenge problem={problem} />
      </>
    );
  }
  else {
    return (
      <>
        <Challenge problem={problems[0]} />
      </>
    )
  }
};
export default PyGym;
