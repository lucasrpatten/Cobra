import React, { FC, useState } from "react";
import { motion } from "framer-motion";

// Props interface
interface Properties {
  options: string[];
  correctOption: string;
  question: string;
  continueFunc: any;
}

// Component
const MultipleChoice: FC<Properties> = ({
  options,
  correctOption,
  question: title,
  continueFunc
}) => {
  // Set up state
  const [selected, setSelected] = useState("");
  const [correct, setCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true)
    if (correct) {
      continueFunc();
    }
  }
  // Handle selection
  const handleSelection = (option: string) => {
    setSelected(option);
    setCorrect(option === correctOption);
  };
  return (
    <div className="p-7 flex flex-col">
      <h3 className="text-2xl font-bold">{title}</h3>
      {options.map((option, index) => (
        <div key={index}>
          <motion.label
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`flex items-center p-2 ${
              submitted
                ? selected === correctOption && selected === option
                  ? "bg-teal"
                  : selected !== correctOption && selected === option
                  ? "bg-red"
                  : ""
                : ""
            }`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              onChange={() => {
                handleSelection(option);
                setSubmitted(false);
              }}
              checked={selected === option}
              disabled={submitted && correct}
              className="form-radio"
            />
            <span className="ml-2 text-lg">{option}</span>
          </motion.label>
        </div>
      ))}
      <button
        className="bg-red hover:bg-white border-4 border-red duration-300 text-dark-gray font-bold py-2 px-4 rounded mt-4"
        onClick={() => handleSubmit()}
        disabled={submitted && !correct}
      >
        Submit
      </button>
    </div>
  );
};

export default MultipleChoice;
