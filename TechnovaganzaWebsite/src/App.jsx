import React from 'react'
import StickyNavbar from './components/StickyNavbar'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Events from './components/Events';
import Gallery from "./components/Gallery"
import Banner from "./components/Banner";
const App = () => {
  return (
    <div>
       <Router>
      <StickyNavbar />
       <Routes>
        <Route path="Events" component={Events} />
        <Route path="Gallery" component={Gallery} />
        </Routes>
    </Router>
      {/* <StickyNavbar/> */}
      <Banner/>
    </div>
  )
}

export default App
