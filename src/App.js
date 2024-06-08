import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import DogGallery from "./components/DogGallery";
import CatsGallery from "./components/CatsGallery";
import BirdsGallery from "./components/BirdsGallery";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dogs" element={<DogGallery />} />
        <Route path="/cats" element={<CatsGallery />} />
        <Route path="/birds" element={<BirdsGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
