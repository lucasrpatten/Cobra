import React, { useState } from "react";
import * as monaco from "monaco-editor";
import MonacoEditor, { loader } from "@monaco-editor/react"; // https://github.com/suren-atoyan/monaco-react
import Intro from "../Lessons/PythonBasics/Intro/Intro";

const { ipcRenderer } = window.require("electron");

loader.config({ monaco });

interface Properties {}

const IDE: React.FC<Properties> = (props: Properties) => {
  const [editorState, setEditorState] = useState('print("Hello World!")');
  const handleEditorChange: any = (value: string, event: any) => {
    setEditorState(value);
  };

  const runCode = async function () {
    const exePath = "/usr/bin/python";
    const result = await ipcRenderer.invoke("run-python-code", {
      editorState,
      exePath,
    });
    console.log(result);
    return result;
  };

  // async function runCode() {
  //   const res = await ipcRenderer.invoke("run-python-code", editorState, "usr/bin/python");
  //   return res;
  // };

  const options = {
    tabSize: 4, //normal tab size
    automaticLayout: true, // word wrapping
    selectOnLineNumbers: true,
    suggestOnTriggerCharacters: true,
    quickSuggestions: true,
  };

  return (
    <>
      <button className="m-10 duration-300 text-white font-bold hover:bg-dark-gray border-4 border-red px-5 py-2 bg-red rounded-xl" onClick={() => console.log(runCode())}>Run</button>
      <MonacoEditor
        defaultLanguage="python"
        // theme="vs-dark"
        defaultValue={editorState}
        onChange={handleEditorChange}
        width="100%"
        height="100%"
        options={options}
      />
    </>
  );
};

export default IDE;
