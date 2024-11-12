import React from 'react'
import Layout from './Layout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BangleCards from './Components/BangleCards';
import EarRingsCards from './Components/EarRingsCards';
import NecklesCards from './Components/NecklesCards';
import ExploreProductCards from './Components/ExploreProdutCards'
import  RingsCards  from './Components/RingsCards';
import VaddanamCards from './Components/VaddanamCards';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
const App = () => {
  return (
    <div>
      {/* <Layout/> */}
      <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/BangleCards" element={<BangleCards/>} />
        <Route path="/EarRingsCards" element={<EarRingsCards/>} />
        <Route path="/NecklesCards" element={<NecklesCards/>} />
        <Route path="/ExploreProductCards" element={<ExploreProductCards/>} />
        <Route path="/RingsCards" element={<RingsCards/>} />
        <Route path="/VaddanamCards" element={<VaddanamCards/>} />
        <Route path="/Footer" element={<Footer/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App