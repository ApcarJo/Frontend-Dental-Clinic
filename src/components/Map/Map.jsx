import GoogleMaps from "simple-react-google-maps";
import React from 'react';
import './Map.css';


const Map = () => {
    return (

      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyDY56_ct5PTIW9t9nLnhmhcc49ClIZH098"}
          style={{ height: "800px", width: "300px" }}
          zoom={12}
          center={{
            lat: 39.466667,
            lng: -0.375000
          }}
          markers={[
            { lat: 40.409711, lng: -3.692569 },
            { lat: 40.412072, lng: -3.676463 },
            { lat: 40.451824, lng: -3.690759 }
          ]}
        />
      </div>
    );

}

export default Map;