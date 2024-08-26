import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Box, Button } from '@chakra-ui/react';

const CodeEditor = () => {
  const [code, setCode] = useState('// Your code here');
  const [output, setOutput] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    });
  };

  const handleRun = () => {
    try {
      const func = new Function('return ' + code);
      const result = func();
      setOutput(result === undefined ? 'No output' : result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg="gray.800">
      <MonacoEditor
        height="772px"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          fontSize: 14,
          wordWrap: 'on',
          minimap: { enabled: false },
        }}
      />
      <Button mt={4} mr={5} variant={"unstyled"} border={"1px solid white"}  padding={"5px"} color={"white"} onClick={handleCopy}>
        Copy Code
      </Button>
      <Button mt={4} variant={"unstyled"}  border={"1px solid white"}  padding={"5px"}  color={"white"} onClick={handleRun}>
        Run Code
      </Button>
    </Box>
  );
};

export default CodeEditor;
