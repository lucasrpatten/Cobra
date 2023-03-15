import React from "react";
import snekMascot from "../snake.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PyGymHome: React.FC = () => {
  return (
    <>
     <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-1/2 h-screen flex items-center justify-center text-center min-h-[50px]">
          <div className="w-2/3 text-white w-full bottom-0 left-0 text-4xl font-black font-mono">
          <Link className="w-2/3" to="/playground">Click Here For Our AI To Pick A Challenge For You</Link>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
};
export default PyGymHome;
