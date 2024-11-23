import React from 'react'

function HittaOss() {
  return (
    <div className='HittaOssCont'>
        <h2>Hitta Oss</h2>
        <ul>
           <li className='list-items-contact'> <span>Telefonnummer: <a href='tel:086699166' className='hitta-a'>08-669 91 66</a></span> </li>
           {/* <li className='list-items-contact'> <span>E-post: <a  href='mailto:folketsforever@gmail.com' className='hitta-a'>folketsforever@gmail.com</a></span>   </li> */}
           <li className='list-items-contact'> <span>Adress: <a href='https://www.google.com/maps/dir//google+maps+folkets+kebab/@59.3389007,17.9978196,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x465f779fcf386603:0xc7edb9af1d791e95!2m2!1d18.0528809!2d59.3177965' className='hitta-a'>Hornsgatan 92, 11821 Stockholm</a></span>  </li>
        </ul>
    </div>
  )
}

export default HittaOss