import * as React from "react";

interface Properties {
  text: string;
  update: any;
}

const Selection: React.FC<Properties> = ({ text, update }: any) => {
  return (
    <>
      <div>
        <div onClick={() => update(1)} className="text-center text-green-300">{text}</div>
      </div>
    </>
  );
};

export default Selection;
