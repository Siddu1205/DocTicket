import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>
    </div>
  );
}

export default App;
