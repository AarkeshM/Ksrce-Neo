import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./pages/About";
import Footer from "./components/Footer";
import Domains from "./pages/Domains";
import Programs from "./pages/Programs";
import Startups from "./pages/Startups";
import GetInvolved from "./pages/GetInvolved";
import Facilities from "./pages/Facilities";
import FooterTicker from "./pages/FooterTicker";
import Contact from "./pages/Contactus";
import OurTeam from "./pages/OurTeam";
import SucessStories from "./pages/SuccessStories";

const App = () => {
  return (
    <>
    
    <Router>

        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path='/domain' element={<Domains />} />
            <Route path='/programs' element={<Programs />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/successstories" element={<SucessStories />} />  
          </Routes>
        </main>
        <FooterTicker />
        <Footer />
      
    </Router>
    
    </>
  );
};

export default App;
