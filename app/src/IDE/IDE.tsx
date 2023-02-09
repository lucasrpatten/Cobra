import React from "react";
import * as monaco from "monaco-editor";
import MonacoEditor, { loader } from "@monaco-editor/react";

loader.config({ monaco });

const IDE = () => {
  const handleEditorChange = () => {};

  const options = {
    tabSize: 4, //normal tab size
    automaticLayout: true, // word wrapping
    selectOnLineNumbers: true,
    suggestOnTriggerCharacters: true,
    quickSuggestions: true,
  };

  const runCode = () => {
    // code to run the code
  };

  return (
    <>
      <MonacoEditor
        defaultLanguage="python"
        // theme="vs-dark"
        defaultValue='print("Hello World!")'
        onChange={handleEditorChange}
        width="100vw"
        height="100vh"
        options={options}
      />
    </>
  );
};

export default IDE;
