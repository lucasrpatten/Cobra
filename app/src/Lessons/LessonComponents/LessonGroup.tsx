import React from "react";

interface GroupProps {
  continueFunc: any;
  Content: any;
}

interface ContinueProps {
  wasPressed: any;
}

const ContinueButton: React.FC<ContinueProps> = (props: ContinueProps) => {
  return (
    <>
      <div onClick={() => props.wasPressed(true)}>hkjhkjh</div>
    </>
  );
};

const LessonGroup: React.FC<GroupProps> = (props: GroupProps) => {
  return (
    <>
      <div className="p-6">
        {props.Content}
        <div>
          <ContinueButton wasPressed={props.continueFunc} />
        </div>
      </div>
    </>
  );
};

export default LessonGroup;
