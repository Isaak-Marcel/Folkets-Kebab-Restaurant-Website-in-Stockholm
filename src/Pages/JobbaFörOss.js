import React from 'react'
import HittaOss from '../components/HittaOss'
import { Helmet } from 'react-helmet-async';

function JobbaFörOss() {
  return (
    <div className='button-aboutUs-cont'>
        <Helmet>
          <title>Jobba För Oss</title>
          <meta name="description" content="Arbeta i en dynamisk miljö och utveckla dina färdigheter och erfarenheter."/>
          <link rel="canonical" href="/jobba-för-oss"/>
        </Helmet>
      <h1>Jobba För Oss </h1>
      <p className='om-oss-p' style={{fontWeight: 'normal', marginBottom: '30px'}}>Välkommen till vår Folkets Kebab! Vi söker passionerade och hårt arbetande personer som vill jobba på Folkets Kebab. Arbeta i en dynamisk miljö och utveckla dina färdigheter och erfarenheter. Vi är en inkluderande arbetsplats och välkomnar alla att ansöka, oavsett bakgrund eller erfarenhet. Om du trivs med högt tempo, kundservice och samarbete.</p>
      
      <span style={{fontSize: '1.7rem', fontWeight: 'bold', }}>Maila in ditt CV ifall du vill ansöka</span>
      <HittaOss/>
    </div>
    
  )
}

export default JobbaFörOss