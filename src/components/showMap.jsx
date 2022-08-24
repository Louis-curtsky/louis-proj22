import React from 'react'
import { GoogleMap, LoadScript} from '@react-google-maps/api';

const AnyReactComponent = ({text}) => <div>{text}</div>;

const containerStyle = {
  width: 'auto',
  height: '1024px'
};

const center = {
  lat: 56.876980,
  lng: 14.809180
};

const ShowMap=()=>{
  return (
    <LoadScript
      googleMapsApiKey="API_KEY_REPLACE_HERE"
    >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >

              <AnyReactComponent
                lat={56.046467}
                lng={12.694512}
                text="Test Marker"
                />
      </GoogleMap>
    </LoadScript>
  );
}

export default ShowMap;