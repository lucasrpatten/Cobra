import React, { useRef } from "react";
import IDE from "../IDE/IDE";
import problems from "./problems.json";
import { useNavigate } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import TestCases from "./TestCases";
import { motion } from "framer-motion";



const problem = problems[0];

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
      console.log(tempCode);

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LeftPanel instructions={problem.instructions} />
        <div className="w-2/3 absolute min-h-full right-0">
          <button
            onClick={() => ideRef.current?.runCode()}
            className=""
          >
            Run
          </button>

          <div className="absolute w-full h-3/4 my-6">
            <IDE
              returnResponse={checkCases}
              checkTests={true}
              defaultValue={problem.starting_code}
              ref={ideRef}
            />
          </div>
          <TestCases />
        </div>
      </motion.div>
    </>
  );
};
export default Challenge;
