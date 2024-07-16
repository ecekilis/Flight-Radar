import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useSelector } from 'react-redux';

function Map() {

    const { flights } = useSelector((store) => store.flightReducer);


    return (
        <div>
            <MapContainer center={[39.340544, 35.310927]} zoom={4} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {flights.map((flight) => (
                    <Marker position={[flight.lat, flight.lng]}>
                        <Popup>
                            <div className='popup'>
                                <span>Kod : {flightCode} </span>
                                <button>Detay</button>

                            </div>
                        </Popup>
                    </Marker>
                ))}


            </MapContainer>
        </div>
    )
}

export default Map
