import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

const Lesson: React.FC = () => {
  const { lessonModule, lesson } = useParams();

  const Component = lazy(
    () => import(`./${lessonModule}/${lesson}/${lesson}.tsx`)
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default Lesson;
