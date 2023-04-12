import React, { useEffect,useRef } from 'react'
import Slider from 'react-slick'

/* Images */
import image1 from '../Assets/images/HomeScreenPictures/SilderImages/Kebab kyckling eller mix3 1 900x1600.jpg'
import image2 from '../Assets/images/HomeScreenPictures/SilderImages/hemsidan ordning-2 900x1600.jpg'
import image3 from '../Assets/images/HomeScreenPictures/SilderImages/hemsidan ordning-3 900x1600.jpg'
import image4 from '../Assets/images/HomeScreenPictures/SilderImages/hemsidan ordning-4 900x1600.jpg'
import image5 from '../Assets/images/HomeScreenPictures/SilderImages/hemsidan ordning-5 900x1600.jpg'
import image6 from '../Assets/images/HomeScreenPictures/SilderImages/grill utbud 2 900x1600.jpg'
import image7 from '../Assets/images/HomeScreenPictures/hemsidan ordning-7.png'

function MainSlider() {
  const silderRef = useRef(null);

  useEffect(() => {
    if(silderRef.current){
      silderRef.current.slickPlay()
    }
  }, []);



  const images = [
    { src: image1, 'aria-hidden': 'true' },
    { src: image2, 'aria-hidden': 'true'},
    { src: image3, 'aria-hidden': 'true'},
    { src: image4, 'aria-hidden': 'true'},
    { src: image5, 'aria-hidden': 'true'},
    { src: image6, 'aria-hidden': 'true'},
    { src: image7, 'aria-hidden': 'true'},
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3400,
  };
  return (
    <div className='silder-background'>
    <div className='silder-cont'>
      <Slider ref={silderRef} {...settings}>
        {images.map((image) => (
          <div key={image.src} className='silder-image-div'>
            <img src={image.src} className='slider-image' /*fix the alts*/alt=''  />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );

}

export default MainSlider