import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from "./Main";
import Login from "./login";
import Signup from "./signup";

const App = () => {
  return (
    <Routes>
      <Route exact path = "/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
export default App;