import React, { useRef } from "react";
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

  const ideRef = useRef<any>();

  const checkCases = async (code: string) => {
    for (const testCase of problem.test_cases) {
      const keys: string[] = Object.keys(testCase);
      const values: string[] = Object.values(testCase);
      let tempCode =
        code +
        `\n\n${problem.test_function.replace(keys[0], `"${values[0]}"`)}`;
        console.log(tempCode)

      const result = await ipcRenderer.invoke("run-python-code", {
        code: tempCode,
        interpreterPath: "python",
      });
      const expectedResult = values[values.length - 1] + "\n";
      if (result !== expectedResult) {
        return false;
      }
    }

    return true;
  };

  return (
    <>
      <LeftPanel instructions={problem.instructions} />
      <button onClick={() => (ideRef.current?.runCode())} className="absolute bottom-0">Run</button>
      <div className="h-60 w-2/3 absolute h-2/3 top-10 right-0">
        <IDE
          returnResponse={checkCases}
          checkTests={true}
          defaultValue={problem.starting_code}
          ref={ideRef}
        />
      </div>
    </>
  );
};
export default Challenge;
