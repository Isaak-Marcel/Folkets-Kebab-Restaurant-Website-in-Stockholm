import React, { useState } from 'react'
import image from '../Assets/images/HomeScreenPictures/Folketskebab loga Homepage.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [ShowDropLinks, setShowDropLinks] = useState(false)
  const [isBurgerAnimated, setIsBurgerAnimated] = useState(false);

  const burger = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  

  return (
    <nav className='navbar'>
        <div role="navigation" className="nav">
          <button type='button'
           className={`burger ${isBurgerAnimated ? 'burger-animate' : ''}`}
           onClick={() => {
            setShowDropLinks(!ShowDropLinks);
            setIsBurgerAnimated(!isBurgerAnimated);
          }}
          >
              {burger}
          </button>
          <div className='nav-links-cont'>
                <Link to="/" className="nav-link nav-link-row">Home</Link>
                <Link to='/jobba-för-oss' className="nav-link nav-link-row">Jobba För Oss</Link>
                <Link to="/catering" className="nav-link nav-link-row">Catering</Link>
                <Link to="/#social-media" className="nav-link nav-link-row">Soical Media</Link>
                <Link to="/info" className="nav-link nav-link-row">Info</Link>
          </div>
          <Link to="/" className="logo"><img src={image} loading="lazy" alt="" className="logo" /></Link>
        </div>
        <div className={ShowDropLinks ? 'drop-links drop-links-show' :'drop-links'} >
              <Link to="/" className="nav-link nav-link-drop">Home</Link>  
              <Link to='/jobba-för-oss' className="nav-link nav-link-drop">Jobba För Oss</Link>
              <Link to="/#social-media"  className="nav-link nav-link-drop">Soical Media</Link>
              <Link to="/info" className="nav-link nav-link-drop">Info</Link>
              <Link to="/catering" className="nav-link nav-link-drop">Catering</Link>
        </div>
    </nav>
  )
}



export default Navbar
