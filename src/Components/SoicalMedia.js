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
              <a href='' className='soical-a'>
                <img  src={Tiktok} className='social-image' />    
                <span href='dwa'>@folkets.kebab</span> 
              </a>
            </li>
          
           <li className='social'>
              <a href=''className='soical-a' >
                <img  src={Instagram} className='social-image' />
                <span href='dwa'>@folketskebab_hornsgatan92</span> 
              </a> 
           </li>
           
           <li className='social'>
              <a href='' className='soical-a'>
              <img  src={Facebook} className='social-image' />
              <span href='dwa'>@folketskebab.hornsgatan92</span> 
              </a>
          </li>
        </ul>
    </div>
  )
}

export default SoicalMedia