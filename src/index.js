import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/Navbar.css'
import App from './App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

// Sliders 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// pages
import Tallrikar from './Pages/Tallrikar'
import Cataring from './Pages/Catering';
import RullarOchBröd from './Pages/RullarOchBröd';
import Buffe from './Pages/Buffe';
import Atmosfären from './Pages/Atmosfären';
import JobbaFörOss from './Pages/JobbaFörOss';
import Info from './Pages/Info';
import NyMeny from './Pages/NyMeny';


// Components
import ScrollToTop from './Components/ScrollToTop';

import Navbar from './Components/Navbar';
/* Styles */
import '../src/Styles/MainSlider.css'
import '../src/Styles/ButtonGrid.css'
import '../src/Styles/AboutUs.css'
import '../src/Styles/App.css'
import './Styles/HittaOss.css'
import './Styles/Adress.css'
import './Styles/Dish.css'

import './Styles/Tallrikar.css'


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
      <Cataring/> 
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


