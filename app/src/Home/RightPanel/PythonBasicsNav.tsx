import * as React from "react";
import LessonButton from "./LessonButton";
import { Link } from "react-router-dom";

interface Properties {}

const PythonBasicsNav: React.FC<Properties> = (props: Properties) => {
  return (
    <>
      <div className="nav-wrapper absolute bottom-0">
        <LessonButton title="What Is Programming?" />
        <Link to="/lessons/PythonBasics/Intro">Hello There</Link>
      </div>
    </>
  );
};

export default PythonBasicsNav;
