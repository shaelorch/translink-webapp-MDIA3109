import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import style from "../../styles/Home.module.css"

import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { MapContainer, Popup, Polyline, CircleMarker, Marker } from "https://cdn.esm.sh/react-leaflet"

export default function Map() {
    const position = [49.28594, -123.11129];

    return (
        <MapContainer classname={style.map} center={position} zoom={14} scrollWheelZoom={true}>
           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Skytrain. <br/> Waterfront.
                </Popup>
            </Marker>
        </MapContainer>
    )
}