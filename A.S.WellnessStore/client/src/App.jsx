import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <main className="max-w-7xl px-2 mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
