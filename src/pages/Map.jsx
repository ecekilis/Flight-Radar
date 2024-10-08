import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useDispatch, useSelector } from 'react-redux';
import { icon } from "leaflet";
import { setPath } from '../redux/slices/flight';


function Map({ setDetailId }) {

    const { flights, path } = useSelector((store) => store.flightReducer);


    const dispatch = useDispatch();

    const planeIcon = icon({
        iconUrl: "plane-icon.png",
        iconSize: [30, 30],
    });


    return (
        <div>

            <MapContainer center={[39.340544, 35.310927]} zoom={4.5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {flights.map((flight) => (
                    <Marker key={flight.id} icon={planeIcon} position={[flight.lat, flight.lng]}>
                        <Popup>
                            <div className='popup'>
                                <span>Kod : {flight.code} </span>
                                <button
                                    onClick={() => setDetailId(flight.id)}>
                                    Detay</button>

                                {path.length > 1 &&
                                    <button onClick={() => dispatch(setPath([]))}> Rotayi Temizle </button>}

                            </div>
                        </Popup>
                    </Marker>
                ))}

                <Polyline positions={path} />
            </MapContainer>
        </div>
    )
}

export default Map
