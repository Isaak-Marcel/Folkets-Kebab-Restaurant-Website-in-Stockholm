import ButtonGrid from "./components/ButtonGrid";
import MainSlider from "./components/MainSlider";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import HittaOss from "./components/HittaOss";
import SoicalMedia from "./components/SoicalMedia";
import Adress from "./components/Adress";
import ScrollToTop from "./components/ScrollToTop";
import React, { useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";








function App() {
  const socialMediaRef = useRef(null);

  useEffect(() => {
    console.log("run useEffect soical media scroll")
    if (window.location.hash === '#social-media') {
      socialMediaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [useLocation()]);

  return (
    <div className="body">
      <ScrollToTop/>
      <header className="App-header">
        <Navbar/>
      </header>
      <MainSlider/>
      <div className='button-aboutUs-cont'>
              <ButtonGrid/>
              <AboutUs/>
              <HittaOss/>
              <div id="social-meida" ref={socialMediaRef}>
               <SoicalMedia/>
              </div>
              <Adress/>
      </div>
    </div>
  );
}

export default App;
