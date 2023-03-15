import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Properties {
  title: string;
  lessonModule: string;
  lessonTitle: string;
}

const CloseButton = () => {
  return (
    <svg
      name="close"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const LessonButton: React.FC<Properties> = (props: Properties) => {
  const [showBubble, setShowBubble] = useState(false);

  const navigate = useNavigate()

  const handleShowBubble = () => {
    setShowBubble(!showBubble);
  };

  const handleCloseBubble = () => {
    setShowBubble(false);
  };

  const initialAnimation = {
    opacity: 0,
    scale: 0,
  };

  const animateIn = { opacity: 1, scale: 1 };

  const animateOut = { opacity: 0, scale: 0 };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div>
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={initialAnimation}
                animate={animateIn}
                exit={animateOut}
                className="p-5 speech-bubble-container shadow-lg rounded-lg bg-white flex flex-col w-64 text-center py-3"
                style={{ zIndex: 1, position: "relative", top: "-20px" }}
              >
                <div className="flex justify-between">
                  <p className="font-light text-sm">
                  An Introduction to Programming
                  </p>
                  <span onClick={handleCloseBubble} className="cursor-pointer">
                    <CloseButton />
                  </span>
                </div>
                <button
                onClick={() => navigate("/lessons/" + props.lessonModule + "/" + props.lessonTitle)}
                  className="bg-teal hover:bg-white border-4 border-teal duration-300 text-dark-gray font-bold py-2 px-4 mt-2 rounded-lg"
                  type="button"
                >
                  Play
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div onClick={handleShowBubble} className="cursor-pointer">
          <div className="border-teal bg-white rounded-xl overflow-hidden text-center">
            Lesson One
          </div>
          <div className="text-white text-xl ">{props.title}</div>
        </div>
      </div>
    </>
  );
};

export default LessonButton;
