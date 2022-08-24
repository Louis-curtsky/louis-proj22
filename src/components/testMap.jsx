import React from 'react';
import logo from '../components/logo.jpg';
import {
  GoogleMap, useLoadScript, Marker, InfoWindows, InfoWindow
} from '@react-google-maps/api';
import mapStyle from '../styles/mapStyle';
import {contact} from '../data/contact';


const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
};
const center = {
  lat: 56.876980,
  lng: 14.809180
};
const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
}

const MyMap=()=>{
  const {isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  const [handMark, setHandMark] = useState([]);
  const [selected, setSelected] = useState(null);
  
  const onMapClick = useCallback((event)=> {
    setHandMark((current) => [
      ...current,
      {
        lat: event.latlng.lat(),
        lng: event.latlng.lng(),
        time: new Date(),
      },
    ])
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Map!";

  return (
<div>
<div className="Logo">
    <img src={logo} width="75rm" alt="Logo for Work Freelance" className='rounded-circle'/>
</div>
  <GoogleMap
    mapContainerStyle={mapContainerStyle}
    zoom={12}
    center={center}
    options={options}
    onClick={onMapClick}
    onLoad={onMapLoad}
  >

  {markers.map((marker) => (
    <Marker
    key={marker.time.toISOString()}
    postion={{lat: marker.lat, lng: marker.lng}}
    icon={{
      url: "../images/2-2-grinning-face-emoji-png.png",
      scaledSize: new windows.google.maps.Size(0,0),
      anchor: new window.google.maps.Point(15,15),
    }}
    onClick={()=>{
      setSelected(marker);
    }}
    />
  ))}

  {selected ? (<InfoWindow 
    position={{lat: selected.lat, lng: selected.lng}}
    onCloseClick={()=>{
      setSelected(null);
      }}
    >
    <div>
      <h2>Service Provider</h2>
      <P>located here!</P>
    </div>
  </InfoWindow>): null}
  </GoogleMap>
</div>
)}


export default MyMap;