import React, { useState } from "react";
import * as monaco from "monaco-editor";
import MonacoEditor, { loader } from "@monaco-editor/react"; // https://github.com/suren-atoyan/monaco-react
import Intro from "../Lessons/PythonBasics/Intro/Intro";

const { ipcRenderer } = window.require("electron");

loader.config({ monaco });

interface Properties {
  returnResponse: any;
  defaultValue?: string;
  checkTests?: boolean;
}

const IDE: React.FC<Properties> = (props: Properties) => {
  const [editorState, setEditorState] = useState(props.defaultValue);
  const handleEditorChange: any = (value: string, event: any) => {
    setEditorState(value);
  };

  const runCode = async function () {
    if (props.checkTests) {
      props.returnResponse(editorState)
    }
    else {
      const exePath = "/usr/bin/python";
      const result = await ipcRenderer.invoke("run-python-code", {
        code: editorState,
        interpreterPath: exePath,
      });
      props.returnResponse(result)
    }
  };

  const editorOptions = {
    tabSize: 4, //normal tab size
    automaticLayout: true, // word wrapping
    selectOnLineNumbers: true,
    suggestOnTriggerCharacters: true,
    quickSuggestions: true,
  };

  return (
    <>
      <button onClick={runCode}>Run</button>
      <MonacoEditor
        defaultLanguage="python"
        // theme="vs-dark"
        defaultValue={editorState}
        onChange={handleEditorChange}
        width="100%"
        height="100%"
        options={editorOptions}
      />
    </>
  );
};

export default IDE;
