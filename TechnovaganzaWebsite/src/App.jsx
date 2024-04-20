// App.js
import React from 'react';
import StickyNavbar from './components/StickyNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './components/Events.jsx';
import Gallery from "./components/Gallery.jsx";
import Banner from "./components/Banner.jsx";
import Home from './components/Home.jsx';

const App = () => {
  return (
    <div className='bg-black'>
      <Router>
        <StickyNavbar />
        <Routes>
        <Route path="/Home" element={<Home/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Gallery" element={<Gallery/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
