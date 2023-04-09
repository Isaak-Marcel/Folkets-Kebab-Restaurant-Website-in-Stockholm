import ButtonGrid from "./Components/ButtonGrid";
import MainSlider from "./Components/MainSlider";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import HittaOss from "./Components/HittaOss";
import SoicalMedia from "./Components/SoicalMedia";
import Adress from "./Components/Adress";
import ScrollToTop from "./Components/ScrollToTop";
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
