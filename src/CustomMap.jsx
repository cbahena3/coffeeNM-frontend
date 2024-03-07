
import React, { useState, useCallback} from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import usePlacesAutocomplete, { getGeocode,getLatLng} from "use-places-autocomplete";
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";


const apiKey = import.meta.env.VITE_API_KEY;

const containerStyle = {
  width: '80%', 
  height: '80%'
};
const center = {
  lat: 42.477072,  
  lng: -88.095704
};
const customSvgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>`;
 
const customSvgIconUrl = `data:image/svg+xml;base64,${btoa(customSvgIcon)}`;

export function CustomMap(){
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  const [map, setMap] = React.useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div>
      <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="123 Main St." aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <GoogleMap 
          mapContainerStyle={containerStyle}
          center={center} // Set the center of the map
          zoom={8}
          onLoad={onLoad}
          onUnmount={onUnmount}>
          <Marker position={center} icon={{
            url: customSvgIconUrl,
            scaledSize: new window.google.maps.Size(32, 32) 
          }} /> 
        </GoogleMap>
      </div>
    </div>
  ) : <></>
}



