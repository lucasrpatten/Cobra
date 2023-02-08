
import React from 'react';

interface Properties {
  title: string;
  passChildData: any;
  page: React.ReactElement;
}

const ModuleButton: React.FC<Properties> = (props: Properties) => {
  return (
    <>
      <div>
        <div onClick={() => props.passChildData(props.page)} className="text-center text-green-300">{props.title}</div>
      </div>
    </>
  );
};

export default ModuleButton;