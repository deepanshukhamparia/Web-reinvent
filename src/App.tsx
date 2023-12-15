// import { React, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
