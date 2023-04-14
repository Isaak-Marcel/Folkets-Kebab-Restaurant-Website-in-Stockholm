import React ,{ useState } from 'react';

import image2 from '../Assets/images/ButtonImages/Kebab Rulle 936x936.jpg'
import image3 from '../Assets/images/ButtonImages/Kebab Tallrik 936x936.jpg'
import image4 from '../Assets/images/ButtonImages/Arabi 936x936.jpg'
import image5 from '../Assets/images/ButtonImages/Atmosfären 936x936.jpg'
import image6 from '../Assets/images/ButtonImages/Catering button 936x936.jpg'
import image7 from '../Assets/images/ButtonImages/NyMenu 936x936.jpg'

import { Link } from 'react-router-dom';

function ButtonGrid() {
    const [cardData, /* setCardData*/] = useState([
        {
          image: image3,
          text: 'Tallrikar ',
          link: 'tallrikar'
        },
        {
          image: image2,
          text: 'Rullar och Bröd',
          link: 'rullar-och-bröd'
        },
        {
        image: image4,
        text: 'Buffe',
        link: 'buffe'
        },
        {
        image: image5,
        text: 'Atmosfären',
        link: 'atmosfären',
        color: '#f8f4e9',
        class: 'fix-under-line-on-buttons'
        },
        {
        image: image6,
        text: 'Catering',
        link: 'catering',
        color: '#f8f4e9',
        class: 'fix-under-line-on-buttons'
        },
        {
        image: image7,
        text: 'Ny Meny',
        link: 'ny-meny',
        color: '#f8f4e9',
        class: 'fix-under-line-on-buttons'
        },

        // ...and so on for the other cards
      ]);
    
      return (
        <div className="clickable-cards">
          {cardData.map((card, index) => (
            <Link key={index} to={`/${card.link}`} className="card">
              <img src={card.image} alt={card.text} width={328} height={328} className="card-image" />
              <div className="card-text"> <h3 style={{margin: '0', color: card.color, textDecorationColor: 'white'}} className={card.class + ' cardTextClass'} >{card.text} </h3></div>
              <div className="card-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>  
              </div>
            </Link>
          ))}
        </div>
      );
    };

export default ButtonGrid
