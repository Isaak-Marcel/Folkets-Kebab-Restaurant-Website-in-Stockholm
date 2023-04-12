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
import { Helmet } from "react-helmet-async";









function App() {

  const socialMediaRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    
    if (window.location.hash === '#social-media') {
      socialMediaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="body">
      <Helmet>
        <title>Folkets Kebab Hornsgatan 92</title>
        <meta name="description" content="Folkets Kebab är kebab restaurang med buffe och med en mäng olika orientaliska rätter av de bästa råvarorna.  På Hornsgatan 92, 11821 Stockholm. "/>
        <link rel="canonical" href="/"/>
      </Helmet>
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
