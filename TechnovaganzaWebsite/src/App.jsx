// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StickyNavbar from "./components/StickyNavbar";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Banner from "./components/Banner";
import Home from "./components/Home";
import AppDev from "./components/AppDev";

const App = () => {
  return (
    <div className="bg-black">
      <Router>
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/AppDev" element={<AppDev />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
