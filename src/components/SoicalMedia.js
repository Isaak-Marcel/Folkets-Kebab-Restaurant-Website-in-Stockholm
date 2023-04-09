import React from 'react'


import Tiktok from '../Assets/images/Soical Media Icons/tiktok-logo-1F4A5DCD45-seeklogo.com.png'
import Instagram from'../Assets/images/Soical Media Icons/Instagram_logo_2022.svg (1).png'
import Facebook from '../Assets/images/Soical Media Icons/Facebook_Logo_(2019).png'

function SoicalMedia() {
  return (
    <div className='HittaOssCont'>
        <h2>Soical Media</h2>
        <ul className='social-cont'>
           <li className='social'>
              <a href='https://www.tiktok.com/@folkets.kebab' className='soical-a' target="_blank" rel="noopener noreferrer">
                <img  src={Tiktok} className='social-image' alt='Tiktok logo' />    
                <span >@folkets.kebab</span> 
              </a>
            </li>
          
           <li className='social'>
              <a href='https://www.instagram.com/folketskebab_hornsgatan92'className='soical-a' target="_blank" rel="noopener noreferrer" >
                <img  src={Instagram} className='social-image' alt='Instagram logo'/>
                <span >@folketskebab_hornsgatan92</span> 
              </a> 
           </li>
           
           <li className='social'>
              <a href='https://www.facebook.com/folketskebab.hornsgatan92' className='soical-a' target="_blank" rel="noopener noreferrer">
              <img  src={Facebook} className='social-image' alt='FaceBook logo' />
              <span >@folketskebab.hornsgatan92</span> 
              </a>
          </li>
        </ul>
    </div>
  )
}

export default SoicalMedia