import React from "react";

interface Properties {
  buttonText: string;
  onClick: any;
}
const ContinueButton: React.FC<Properties> = (props: Properties) => {
  return (
    <>
      <div
        className="hover:cursor-pointer select-none"
        onClick={() => props.onClick}
      >
        {props.buttonText}
      </div>
    </>
  );
};

export default ContinueButton;
