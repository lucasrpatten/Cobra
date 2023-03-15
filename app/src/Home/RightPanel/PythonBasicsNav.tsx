import * as React from "react";
import LessonButton from "./LessonButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


interface Properties {}

const PythonBasicsNav: React.FC<Properties> = (props: Properties) => {
  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <div className="nav-wrapper absolute bottom-0">
        <LessonButton title="What Is Programming?" lessonModule="PythonBasics" lessonTitle="Intro" />
      </div>
      </motion.div>
    </>
  );
};

export default PythonBasicsNav;
