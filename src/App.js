import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from "./Main";
import Login from "./login";

const App = () => {
  return (
    <Routes>
      <Route exact path = "/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;