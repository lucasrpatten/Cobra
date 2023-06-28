import React, { useEffect, useState } from "react";
import MultipleChoice from "../../LessonComponents/MultipleChoice";
import randomize from "../../LessonComponents/multipleChoiceRandomizer";
import ContinueButton from "../../LessonComponents/ContinueButton";
import IntroLeftPanel from "./leftside";

interface Properties {}

const randomized = randomize(["Interpreted", "Compiled", "Low-level"]);
const randomized1 = randomize(["HTML and CSS", "Python and JavaScript", "C++ and Java"]);
const randomized2 = randomize(["Its Ease of Use", "Its mainstream nature", "Its \"ultra fast performance\""]);

const Intro: React.FunctionComponent<Properties> = (props: Properties) => {
  const [lessonShown, setLessonShown] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const showNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const elements = [
    <div className="absolute right-0 w-1/2">
    <div key="part1">
      <MultipleChoice
        options={randomized}
        correctOption="Interpreted"
        question="What kind of language is Python?"
        continueFunc={showNext}
      />
    </div>
    </div>,

    <div className="absolute right-0 w-1/2">
    <div key="part2">
      <MultipleChoice
        options={randomized1}
        correctOption="HTML and CSS"
        question="Which languages are most commonly used for Web Development"
        continueFunc={showNext}
        />
    </div>
    </div>,

    <div className="absolute right-0 w-1/2">
    <div key="part3">
      <MultipleChoice
        options={randomized2}
        correctOption="Its Easy of Use"
        question="Why is Python so widely used?"
        continueFunc={showNext}
        />
    </div>
    </div>,
    <div className="absolute right-0 w-1/2">
      <div key="part4">
      <h1 className="text-xl">Lesson Complete!</h1>
      </div>
    </div>

  ];

  useEffect(() => {
    setLessonShown(elements.slice(currentIndex -1, currentIndex).map((e) => e));
  }, [currentIndex]);

  return <>{lessonShown}
    <IntroLeftPanel /></>;
};

export default Intro;
