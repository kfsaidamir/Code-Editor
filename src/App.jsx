import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './pages/Registration/Register';
import Home from './pages/Home/Home';
import CodeEditor from './pages/CodeEditor/CodeEditor';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('isAuthenticated');
  return isAuthenticated ? element : <Navigate to="/" />;
}

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/code-editor' element={<CodeEditor/>} />
      </Routes>
  );
}

export default App;
