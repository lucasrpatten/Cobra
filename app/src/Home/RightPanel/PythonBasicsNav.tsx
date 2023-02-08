import * as React from 'react';
import LessonButton from './LessonButton';

interface Properties {
}

const PythonBasicsNav: React.FC<Properties> = (props: Properties) => {
  return (
    <>
      <div className="nav-wrapper absolute bottom-0">
        <LessonButton title="What Is Programming?"/>
        </div>
    </>
  );
}

export default PythonBasicsNav;