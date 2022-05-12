import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Compnents/Navbar";
import About from "./Compnents/pages/About";
import Appointment from "./Compnents/pages/Appointment";
import ContactUs from "./Compnents/pages/ContactUs";
import Home from "./Compnents/pages/Home";
import Login from "./Compnents/pages/Login";
import Reviews from "./Compnents/pages/Reviews";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
