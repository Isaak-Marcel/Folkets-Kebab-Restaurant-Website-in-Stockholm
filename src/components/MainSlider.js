import React, { useEffect,useRef } from 'react'
import Slider from 'react-slick'


/* Images */
import image1 from '../Assets/images/HomeScreenPictures/Kebab kyckling eller mix3 (1).png'
import image2 from '../Assets/images/HomeScreenPictures/hemsidan ordning-2.png'
import image3 from '../Assets/images/HomeScreenPictures/hemsidan ordning-3.png'
import image4 from '../Assets/images/HomeScreenPictures/hemsidan ordning-4.png'
import image5 from '../Assets/images/HomeScreenPictures/hemsidan ordning-5.png'
import image6 from '../Assets/images/HomeScreenPictures/hemsidan ordning-6.png'
import image7 from '../Assets/images/HomeScreenPictures/hemsidan ordning-7.png'

function MainSlider() {
  const silderRef = useRef(null);

  useEffect(() => {
    if(silderRef.current){
      silderRef.current.slickPlay()
    }
  }, []);



  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 3' },
    { src: image5, alt: 'Image 3' },
    { src: image6, alt: 'Image 3' },
    { src: image7, alt: 'Image 3' },
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
            <img src={image.src} className='slider-image' alt={image.alt}  />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );

}

export default MainSlider