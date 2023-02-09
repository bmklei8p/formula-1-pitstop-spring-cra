import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const center = {
    lat: 10,
    lng: 0,
  };

function TracksMap(){
    const MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: MAP_API_KEY,
    });

    if (!isLoaded) {
        return <></>
    }

    return (
        <div style={{color: "black"}} className="all-tracks-map">
            <GoogleMap
                center={center}
                zoom={3.5}
                mapContainerStyle={{ width: "100%", height: "100vh" }}
                options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                }}
                >
                {/* this is where the markers will go */}
            </GoogleMap>
        </div>
    );
}

export default TracksMap;