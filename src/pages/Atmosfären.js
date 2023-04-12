import React from 'react'

/* Images */

import bildUtanför from '../Assets/images/ButtonImages/Atmosfären 936x936.jpg'
import image2 from '../Assets/images/Atmosfären/inside1 600x1067.jpg'
import image3 from '../Assets/images/Atmosfären/inside2 600x1067.jpg'
import image4 from '../Assets/images/Atmosfären/inside3 600x1067.jpg'

function Atmosfären() {
  

  return (
      <div class="atm-warp">
        <div className='atm'>
          <h1 >Atmosfären</h1>
          <div className="atmgrid">
            <img src={bildUtanför} alt='' width={550} />
            <img src={image4} alt='' className='image-grid-col-2'/>
            <img src={image2} alt='' className='image-grid-col-2'/>
            <img src={image3} alt='' />
          </div>
        </div>
        
      </div>
  );

}
export default Atmosfären