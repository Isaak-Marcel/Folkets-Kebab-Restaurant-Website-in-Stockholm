import React from 'react'
import infoImage from '../Assets/images/InfoPageImages/info chicken 3840x576 Temp.jpg'
import Foodora from '../Assets/images/InfoPageImages/Foodora logo.png'
import Wots from '../Assets/images/InfoPageImages/Wolts logo.png'

function Info() {
  const images = [];
  const importAll = (r) => r.keys().forEach(key => images.push({ url: r(key), alt: '' }));
  importAll(require.context('../Assets/images/Catering/', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className='button-aboutUs-cont infoPage' >
      <h1>Info</h1> 
        <div style={{display: 'flex',}}  className='infoPI'>
              <div className="infoWrap">
                    <p className='info-p'>Besök oss på Hornsgatan 92 i Zinkensdamm och ta del av vår varierande buffé, som erbjuder ett utbud av läckra orientaliska rätter. <strong> Buffén är öppen på helger mellan kl. 10:00 - 18:00.</strong> </p>
                    <p className='info-p'><strong>Vår vanliga à la carte-meny är öppen varje dag från kl. 10:00 - 04:00 </strong>, vilket ger dig möjligheten att avnjuta våra smakrika rätter när som helst på dagen.</p>
                
                    <p className='info-p'>
                    Om du föredrar att njuta av vår mat hemma kan du enkelt beställa online för avhämtning via <a href="https://www.foodora.se/restaurant/s0mu/folkets-kebab" target="_blank" rel="noopener noreferrer"> Foodora </a> eller <a  href="https://wolt.com/sv/swe/stockholm/restaurant/folkets-kebab-hornsgatan-1" target="_blank" rel="noopener noreferrer">Wolt</a>.
                    </p>
                    <div className='infoPageLogoWarper'>
                      <a href="https://www.foodora.se/restaurant/s0mu/folkets-kebab" target="_blank" rel="noopener noreferrer"><img src={Foodora} height={50}  alt='Foodora logo' id='foodoraLogo'/></a>
                      <a href="https://wolt.com/sv/swe/stockholm/restaurant/folkets-kebab-hornsgatan-1" target="_blank" rel="noopener noreferrer"><img src={Wots}  height={80} alt='Wots logo'/></a>
                    </div>
              </div>
              
              <div className='info-image-warp'>
                  <img className='info-image' src={infoImage} height={600} alt='' style={{borderRadius: '0px'}}  />
                  <p className='info-p' >
                  Välkommen till Folkets Kebab, grundat 1991, där vi erbjuder den autentiska arabiska à la carte-menyn som snabbmat till ett överkomligt pris för alla. Vårt fokus ligger på att servera stora portioner av fräscha och orientaliska rätter tillagade med de finaste råvarorna.</p>
              </div>  
          </div>
    </div>
  )
}

export default Info;
