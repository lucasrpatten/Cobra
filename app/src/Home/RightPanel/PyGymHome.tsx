import React, { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import challenges from "../../PyGym/problems.json";
import { motion } from "framer-motion";
import "./scrollbar.css";
import "./pygymhome.css";

interface ProblemProps {
  problem: Problem;
}

const Problem: React.FC<ProblemProps> = ({ problem }) => {
  return (
    <Link to={`/pygym/${problem.id}`} style={{ display: 'contents' }}>
      <div className="w-full col-span-3 grid-item">{problem.title}</div>
      <div className="w-full col-span-1 grid-item">{problem.difficulty}</div>
      <div className="w-full col-span-1 grid-item">X</div>
    </Link>

  )
}

const PyGymHome: React.FC = () => {
  const [problems, _] = useState(challenges);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-full h-full flex items-center justify-center overflow-y-scroll">
          <div className="w-full h-screen items-center justify-center text-center min-h-[50px] font-black font-mono text-xl left-0 bottom-0 text-white">
            <Link className="w-2/3" to="/playground">
              Random Problem
            </Link>
            <div className="grid grid-cols-5 gap-1 p-1 bg-[darkcyan]">
              <div className="w-full col-span-3 ">Title</div>
              <div className="w-full col-span-1">Difficulty</div>
              <div className="w-full col-span-1">Status</div>
              {problems.map((problem) => (
                <Problem problem={problem} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PyGymHome;
