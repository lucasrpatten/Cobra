import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const IDE = () => {
  const [editorValue, setEditorValue] = React.useState('print("Hello World!")');

  const onEditorChange = (value) => {
    setEditorValue(value);
  };

  const options = {
    selectOnLineNumbers: true,
    autoClosingBrackets: true,
    autoClosingQuotes: true,
    suggestOnTriggerCharacters: true,
    acceptSuggestionOnEnter: true,
    quickSuggestions: true,
  };

  const runCode = () => {
    // code to run the code
  };

  return (
      <>
        <MonacoEditor
          language="python"
          value={editorValue}
          onChange={onEditorChange}
          width="100vw"
          height="100vh"
          options={options}
        />
        <button onClick={runCode}>Run Code</button>
      </>
  );
}

export default IDE;