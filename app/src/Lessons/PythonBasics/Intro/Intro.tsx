import React, { useEffect, useState } from "react";
import MultipleChoice from "../../LessonComponents/MultipleChoice";
import randomize from "../../LessonComponents/multipleChoiceRandomizer";
import IDE from "../../../IDE/IDE";
import ContinueButton from "../../LessonComponents/ContinueButton";

interface Properties {}

const randomized = randomize(["lucas", "george", "nathan"]);

const Intro: React.FunctionComponent<Properties> = (props: Properties) => {
  const [lessonShown, setLessonShown] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const showNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const elements = [
    <div key="part1">
      <MultipleChoice
        options={randomized}
        correctOption="lucas"
        question="Who is the coolest?"
        continueFunc={showNext}
      />
    </div>,
    <div className="h-screen" key="part2">
      Howdy
      <ContinueButton onClick={showNext} buttonText="Continue" />
    </div>,
  ];

  useEffect(() => {
    setLessonShown(elements.slice(0, currentIndex).map((e) => e));
  }, [currentIndex]);

  return <>{lessonShown}</>;
};

export default Intro;
