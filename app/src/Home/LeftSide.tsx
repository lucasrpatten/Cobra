import React from "react";
import { Link } from "react-router-dom";
import Selection from "./Selection";

interface Properties {}

const LeftSide = ({ update }: any, props: Properties) => {
      let onClickFunction = (arg: any) => alert(arg);

  return (
    <>
      <div
        className={
          "relative float-left grid-container left-0 inline-grid w-1/3 h-screen bg-zinc-900"
        }
      >
        <Selection text="Python" update={onClickFunction} />
      </div>
    </>
  );
};
export default LeftSide;
