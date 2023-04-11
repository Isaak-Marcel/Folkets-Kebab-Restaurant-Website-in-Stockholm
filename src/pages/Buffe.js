import React from 'react'
import bottomImage from '../Assets/images/Buffe/not final (3)-min.jpg'
import sideImage from '../Assets/images/Buffe/not final (2)-min.jpg'
import imageBelowP from '../Assets/images/Buffe/not final (1)-min.jpg'


function Buffe() {
  return (
    <div className='buffeCont button-aboutUs-cont'>
      <h1>Buffe</h1>
      <div className='BuffeandImagePCont'>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className='buffecontppppp'>
          <div className='buffepDiv'>
          <p style={{marginBottom: '30px'}}>Vår buffé ligger på övervåningen och är öppen på helger mellan kl. 10:00 - 18:00</p>
          <p>Buffen inehåller en massa olika orgentalisk rätter</p>
          </div>
          <img alt='' className='buffeimageBelowP' src={imageBelowP} height={200} />
        </div>
        <div className='buffeContImage2'>
          <img src={sideImage} alt='' height={500}/>
        </div>
      </div>


      <img className='imageBottomStreachFullWidth' src={bottomImage} alt=''  />
    </div>
  )
}

export default Buffe