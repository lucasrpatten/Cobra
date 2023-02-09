import React from "react";
import MultipleChoice from "../../LessonComponents/MultipleChoice";
import randomize from "../../LessonComponents/multipleChoiceRandomizer";

interface Properties {}

const Intro: React.FunctionComponent<Properties> = (props: Properties) => {
  return (
    <>
      <div>
        <MultipleChoice
          options={randomize(["lucas", "george", "nathan"])}
          correctOption="lucas"
          question="Who is the coolest?"
        />
      </div>
    </>
  );
};

export default Intro;
