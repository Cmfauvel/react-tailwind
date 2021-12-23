import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import Header from "./pages/partials/Header";
import { Register } from "./pages/Register/Register";
import HomeScreen from './pages/Home/HomeScreen';

function App(): JSX.Element {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
