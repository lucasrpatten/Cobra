import React from "react";
import IDE from "../IDE/IDE";
import problems from "./problems";

const problem = problems.print_argument;

const { ipcRenderer } = window.require("electron");
const Playground = () => {
  const checkCases = async (code: string) => {
    for (const element of problem.test_cases) {
      const test_case = element;
      let tempCode = code + `\n\n${problem.test_function.replace('arg1', `"${test_case[0]}"`)}`;

      const result = await ipcRenderer.invoke("run-python-code", {
        code: tempCode,
        interpreterPath: "python",
      });
      if (result != test_case[0]) {
        return false;
      }
    }
    console.log("failure")

    return true;
  };
  return (
    <>
      {problem.instructions}
      <button onClick={() => window.location.reload()}>Reset</button>
      <div className="h-screen">
        <IDE
          returnResponse={checkCases}
          checkTests={true}
          defaultValue={problem.starting_code}
        />
      </div>
    </>
  );
};
export default Playground;
