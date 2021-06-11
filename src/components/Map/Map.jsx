// import GoogleMaps from "simple-react-google-maps";
import React from 'react';
import './Map.css';
import map from '../../assets/Map/map1.gif';


const Map = () => {
    return (

      <div className="map">
          DESDE MAP
          <img src={map} alt="map"/>
      </div>
    );

}

export default Map;