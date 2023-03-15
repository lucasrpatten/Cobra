
import React from 'react';

interface Properties {
  title: string;
  passChildData: any;
  page: React.ReactElement;
}

const ModuleButton: React.FC<Properties> = (props: Properties) => {
  return (
    <>
      <div className='m-5'>
        <div onClick={() => props.passChildData(props.page)} className="hover:cursor-pointer hover:bg-teal hover:text-dark-gray border-4 border-teal duration-300 font-bold text-teal text-center bg-dark-gray rounded-xl py-2 px-5">{props.title}</div>
      </div>
    </>
  );
};

export default ModuleButton;