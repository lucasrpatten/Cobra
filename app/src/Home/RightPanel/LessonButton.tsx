import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Properties {
  title: string;
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
      <div className="relative">
        <div>
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={initialAnimation}
                animate={animateIn}
                exit={animateOut}
                className="speech-bubble-container shadow-lg rounded-lg bg-white relative flex flex-col w-64 text-center py-3"
                style={{ zIndex: 1, position: "relative", top: "-20px" }}
              >
                <div className="flex justify-between">
                  <p className="font-light text-sm">
                    This is a small description of this lesson.
                  </p>
                  <span
                    onClick={handleCloseBubble}
                    className="cursor-pointer"
                  >
                    <CloseButton />
                  </span>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded-lg"
                  type="button"
                >
                  Play
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div onClick={handleShowBubble} className="cursor-pointer">
          <div className="border-red-500 w-20 h-20 bg-white rounded-full overflow-hidden text-center">
            hi
          </div>
          <div className="">{props.title}</div>
        </div>
      </div>
    </>
  );
};

export default LessonButton;
