import React from "react";

interface Properties {
  onClick: any;
}
const ContinueButton: React.FC<Properties> = (props: Properties) => {
  return (
    <>
      <div
        className="hover:cursor-pointer select-none"
        onClick={() => props.onClick("fkdlj")}
      >
        afdss
      </div>
    </>
  );
};

export default ContinueButton;
