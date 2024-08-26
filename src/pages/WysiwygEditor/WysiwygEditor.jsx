// import React, { useState } from "react";
// import { MonacoEditor } from "@monaco-editor/react";
// import { Box, Button } from "@chakra-ui/react";
// const WysiwygEditor = () => {
//   const [code, setCode] = useState("// Your code here");

//   const handleEditorChange = (value) => {
//     setCode(value);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(code).then(() => {
//       alert("Code copied to clipboard!");
//     });
//   };

//   return (
//     <Box p={4}>
//       <MonacoEditor
//         height="500px"
//         defaultLanguage="javascript"
//         defaultValue={code}
//         onChange={handleEditorChange}
//         theme="vs-dark"
//       />
//       <Button mt={4} colorScheme="teal" onClick={handleCopy}>
//         Copy Code
//       </Button>
//     </Box>
//   );
// };

// export default WysiwygEditor;
