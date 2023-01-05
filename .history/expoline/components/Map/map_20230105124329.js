import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
export default function Map() {
    const position = [49.28594, -123.11129];

    const blueOption = { color: "#005DAA" };

    const redOption = {color: 'red' };

    const polyline = [ 
        [49.28594, -123.11129],
        [49.2862526257819, -123.1202039],
        [49.283438850308286, -123.11621933259502],
        [49.28013284319446, -123.11014287862584],
        [49.273318980467025, -123.10037145958005],
        [49.2627770134397, -123.06919358656506],
        [49.24841124748144, -123.055842200058],
        [49.24434236679643, -123.04542767492465],
        [49.238527289117606, -123.03180071725312],
        [49.22992666226876, -123.01272618921564],
        [49.22591186740195, -123.00391564608952],
        [49.22022674217617, -122.988486726947122],
        [49.21276468206421, -122.95933430532412],
        [49.2002694713839, -122.94923127907236],
        [49.20176121342438, -122.91268977631553],
        [49.20521830518485, -122.9060229478834],
    ]
    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Waterfront Station <br/> | Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.2862526257819, -123.1202039]} 
            >
                <Popup>
                    Burrard Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.283438850308286, -123.11621933259502]} 
            >
                <Popup>
                    Granville Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.28013284319446, -123.11014287862584]} 
            >
                <Popup>
                    Stadium-Chinatown Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.273318980467025, -123.10037145958005]} 
            >
                <Popup>
                    Main Street-Science World Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.2627770134397, -123.06919358656506]} 
            >
                <Popup>
                    Commercial-Broadway Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.24841124748144, -123.055842200058]} 
            >
                <Popup>
                    Nanaimo Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.24434236679643, -123.04542767492465]} 
            >
                <Popup>
                29th Ave Station <br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.238527289117606, -123.03180071725312]} 
            >
                <Popup>
                Joyce-Collingwood Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.22992666226876, -123.01272618921564]} 
            >
                <Popup>
                Patterson Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.22591186740195, -123.00391564608952]} 
            >
                <Popup>
                Metrotown Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.22022674217617, -122.988486726947122, -122.988486726947122]} 
            >
                <Popup>
                Royal Oak Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.21276468206421, -122.95933430532412]} 
            >
                <Popup>
               Edmonds Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.2002694713839, -122.94923127907236]} 
            >
                <Popup>
               22nd Street Station<br/>| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.20176121342438, -122.91268977631553]} 
            >
                <Popup>
                New Westminster Station<br/>| Expo Line |
                </Popup>
            </Marker>


            <Marker position={[49.20521830518485, -122.9060229478834]} 
            >
                <Popup>
                New Westminster Station<br/>| Expo Line |
                </Popup>
            </Marker>

            
           
            <Polyline pathOptions={blueOption} positions={polyline} />
        </MapContainer>
    )
}