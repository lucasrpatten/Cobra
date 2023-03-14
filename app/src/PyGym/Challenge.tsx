import React from "react";
import IDE from "../IDE/IDE";
import problems from "./problems";
import { useNavigate } from "react-router-dom";
import LeftPanel from "./LeftPanel";

const problem = problems.print_argument;

const { ipcRenderer } = window.require("electron");

interface ChallengeProperties {
  problem: any;
}

const Challenge = ({ problem }: ChallengeProperties) => {
  const checkCases = async (code: string) => {
    for (const testCase of problem.test_cases) {
      const keys: string[] = Object.keys(testCase);
      const values: string[] = Object.values(testCase);
      let tempCode =
        code +
        `\n\n${problem.test_function.replace(keys[0], `"${values[0]}"`)}`;

      const result = await ipcRenderer.invoke("run-python-code", {
        code: tempCode,
        interpreterPath: "python",
      });
      const expectedResult = values[values.length - 1] + "\n";
      if (result !== expectedResult) {
        console.log(result !== expectedResult);
        console.log(result);
        console.log(expectedResult);
        return false;
      }
    }

    return true;
  };

  return (
    <>
      <LeftPanel instructions={problem.instructions} />
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
export default Challenge;
