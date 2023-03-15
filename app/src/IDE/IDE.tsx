import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
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

const IDE = forwardRef((props: Properties, ref) => {
  const [editorState, setEditorState] = useState(props.defaultValue);
  const handleEditorChange: any = (value: string, event: any) => {
    setEditorState(value);
  };

  const editorOptions = {
    tabSize: 4, //normal tab size
    automaticLayout: true, // word wrapping
    selectOnLineNumbers: true,
    suggestOnTriggerCharacters: true,
    quickSuggestions: true,
  };


      const runCode = async () => {
        if (props.checkTests) {
          props.returnResponse(editorState);
        } else {
          const exePath = "/usr/bin/python";
          const result = await ipcRenderer.invoke("run-python-code", {
            code: editorState,
            interpreterPath: exePath,
          });
          props.returnResponse(result);
        }
      }

      useImperativeHandle(ref, () => ({
        runCode
      }))

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
        options={editorOptions}
      />
  );
  })

export default IDE;
