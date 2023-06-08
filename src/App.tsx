import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/Main";
function App() {
  return (
    <>
    
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />}  />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
