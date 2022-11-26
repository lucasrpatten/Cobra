import React from "react";
import { Link } from "react-router-dom";

interface Properties {
  position?: string;
  maxWidth?: string;
}

const SideBar = (props: Properties) => {
  const checkProps = () => {
    if (!props.position) {
      props.position = "absolute";
    }
    if (!props.maxWidth) {
      props.maxWidth = "max-w-[400px]";
    }
  };
  return (
    <>
      {checkProps()}
      <div
        className={
          props.position +
          " " +
          props.maxWidth +
          " " +
          "grid-container left-0 inline-grid w-1/3 h-screen bg-zinc-900"
        }
      >
        <Link to="/playground">afhsdj</Link>
      </div>
    </>
  );
};
export default SideBar;
