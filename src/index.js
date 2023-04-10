import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

// Sliders 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// pages
import Tallrikar from './pages/Tallrikar';
import Catering from './pages/Catering'
import RullarOchBröd from './pages/RullarOchBröd';
import Buffe from './pages/Buffe';
import Atmosfären from './pages/Atmosfären';
import JobbaFörOss from './pages/JobbaFörOss';
import Info from './pages/Info';
import NyMeny from './pages/NyMeny';


// Components
import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/Navbar';
/* Styles */
import './styles/Navbar.css'
import '../src/styles/MainSlider.css'
import '../src/styles/ButtonGrid.css'
import '../src/styles/AboutUs.css'
import '../src/styles/App.css'
import './styles/HittaOss.css'
import './styles/Adress.css'
import './styles/Dish.css'
import './styles/Tallrikar.css'
import './styles/Atmosfären.css'
import './styles/GridOfImages.css'

//fix lowercasing
// require('dotenv').config();

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,

  },
    {
    path: '/tallrikar',
    element:  <div> 
      <Navbar/> 
      <Tallrikar/> 
      <ScrollToTop/>
    </div>
  },
  {
    path: '/catering',
    element:  <div> 
      <Navbar/> 
      <Catering/> 
      <ScrollToTop/>
    </div>
  },
  {
    path: '/rullar-och-bröd',
    element: <div> 
      <Navbar/> 
      <RullarOchBröd/> 
      <ScrollToTop/>
    </div>
  },
  {
    path: '/buffe',
    element: <div> 
      <Navbar/> 
      <Buffe/> 
      <ScrollToTop/>
    </div>
  },
  {
    path: '/atmosfären',
    element: <div> 
      <Navbar/> 
      <Atmosfären/> 
      <ScrollToTop/>
    </div>
  },
  {
    path: '/ny-meny',
    element: <div> 
      <Navbar/> 
      <NyMeny/> 
      <ScrollToTop/>
    </div>
  },
  {
    path: '/jobba-för-oss',
    element: <div> 
      <Navbar/> 
      <JobbaFörOss/> 
      <ScrollToTop/>
    </div>
  },
  {
    path: '/info',
    element: <div> 
      <Navbar/> 
      <Info/> 
      <ScrollToTop/>
    </div>
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


