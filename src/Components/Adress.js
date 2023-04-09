import React from 'react'
import {GoogleMap , useLoadScript, MarkerF} from "@react-google-maps/api";

export default function Adress() {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const { isLoaded }  = useLoadScript({
        googleMapsApiKey: apiKey,
    })
  
    if(!isLoaded) return <div>Loading ...</div>;
    return <Map/>

}

function Map(){
    
    return (
    <GoogleMap 
        zoom={17} 
        center={{ lat: 59.317795, lng: 18.05290  }}
        mapContainerClassName="map-cont"
        >
           
            
            <MarkerF position={{lat: 59.317795, lng: 18.05290}}
             />
    </GoogleMap>

    )
}
 
