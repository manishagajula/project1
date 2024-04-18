import React from "react";
import { Map, Marker } from "@googlemaps/react-wrapper";

const App = () => {
  const [center, setCenter] = React.useState({
    lat: 37.78825,
    lng: -122.4324,
  });

  return (
    <Map center={center} zoom={15} style={{ width: "500px", height: "500px" }}>
      <Marker position={center} />
    </Map>
  );
};

export default App;
