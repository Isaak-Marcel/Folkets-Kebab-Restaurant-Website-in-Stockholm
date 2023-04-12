import React from 'react'
import Arabi from '../Assets/images/ButtonImages/Arabi 936x936.jpg'
import Lammstek from '../Assets/images/NyMeny/Lammstek 936x936.jpg'
import Special from '../Assets/images/NyMeny/special 936x936 png.jpg'
import Mix_Shish_Kebab_och_Lammfile from '../Assets/images/NyMeny/Mix shish kebab och lammfile 936x936.jpg'


function NyMeny() {
  return (
    <div className='nyMeny button-aboutUs-cont '>
        <h1>Ny på Menyn</h1>
        <div className="nyMenyGrid">
          <div>
             <h2>Arabi</h2>
             <img src={Arabi} alt='bild på Arabi'/>
          </div>
          <div>
             <h2>Lammstek</h2>
             <img src={Lammstek} alt='Bild på lamstek'/>
          </div>
          <div>
             <h2>Special</h2>
             <img src={Special} alt='Bild på Special'/> {/* Skriv besikrivning i alt*/}
          </div>
          <div style={{display: 'flex', flexFlow: 'column', justifyContent: 'flex-end' }}>
             <h2  style={{flex: '0 0 0'}} className='nymanyLongText'>Mix Shish Kebab och Lammfile</h2>
             <img style={{flex: '0 0 0'}} src={Mix_Shish_Kebab_och_Lammfile} alt='Bild på Mix Shish Kebab och Lammfile'/>
          </div>
        </div>
    </div >
  )
}

export default NyMeny