import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import styled from 'styled-components'

import Text from '../text'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'




export default function Map() {
    const position = [49.28594, -123.11129];

    const blueOption = { color: "#005DAF", weight:5 };

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
        [49.20521830518485, -122.9060229478834],
        [49.20587142351246, -122.87435173718517],
        [49.20102097877474, -122.8508964126631],
        [49.1897209413475, -122.84797435958329],
        [49.18290999816236, -122.84478657307581]
        
    ]



    const lougheedline = [
        [49.20521830518485, -122.9060229478834],
        [49.22559946869088, -122.88933206544792],
        [49.23299466100193, -122.88290531725335],
        [49.248814953016954, -122.89720949397046],
        [49.25367127330616, -122.9187357167187]
    ]

    return (
        <><Text></Text>
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={position} >
                <Popup>
                    Waterfront Station <br /> | Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.2862526257819, -123.1202039]}
            >
                <Popup>
                    Burrard Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.283438850308286, -123.11621933259502]}
            >
                <Popup>
                    Granville Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.28013284319446, -123.11014287862584]}
            >
                <Popup>
                    Stadium-Chinatown Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.273318980467025, -123.10037145958005]}
            >
                <Popup>
                    Main Street-Science World Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.2627770134397, -123.06919358656506]}
            >
                <Popup>
                    Commercial-Broadway Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.24841124748144, -123.055842200058]}
            >
                <Popup>
                    Nanaimo Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.24434236679643, -123.04542767492465]}
            >
                <Popup>
                    29th Ave Station <br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.238527289117606, -123.03180071725312]}
            >
                <Popup>
                    Joyce-Collingwood Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.22992666226876, -123.01272618921564]}
            >
                <Popup>
                    Patterson Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.22591186740195, -123.00391564608952]}
            >
                <Popup>
                    Metrotown Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.22022674217617, -122.988486726947122, -122.988486726947122]}
            >
                <Popup>
                    Royal Oak Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.21276468206421, -122.95933430532412]}
            >
                <Popup>
                    Edmonds Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.2002694713839, -122.94923127907236]}
            >
                <Popup>
                    22nd Street Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.20176121342438, -122.91268977631553]}
            >
                <Popup>
                    New Westminster Station<br />| Expo Line |
                </Popup>
            </Marker>


            <Marker position={[49.20521830518485, -122.9060229478834]}
            >
                <Popup>
                    Columbia Station<br />| Expo Line |
                </Popup>
            </Marker>

            <Marker position={[49.20102097877474, -122.8508964126631]} pathOptions={blueOption}>
                <Popup>Gateway Station<br /> | Expo Line |</Popup>
            </Marker>

            <Marker position={[49.1897209413475, -122.84797435958329]} pathOptions={blueOption}>
                <Popup>Surrey Central Station<br />| Expo Line |</Popup>
            </Marker>

            <Marker position={[49.18290999816236, -122.84478657307581]} pathOptions={blueOption}>
                <Popup>King George Station<br />| Expo Line |</Popup>
            </Marker>

            <Marker position={[49.22559946869088, -122.88933206544792]} pathOptions={blueOption}>
                <Popup>Sapperton Station<br />| Expo Line |</Popup>
            </Marker>

            <Marker position={[49.23299466100193, -122.88290531725335]} pathOptions={blueOption}>
                <Popup>Braid Station<br />| Expo Line |</Popup>
            </Marker>

            <Marker position={[49.248814953016954, -122.89720949397046]} pathOptions={blueOption}>
                <Popup>Lougheed Town Centre Station<br />| Milleniun Line & Expo Line |</Popup>
            </Marker>

            <Marker position={[49.25367127330616, -122.9187357167187]} pathOptions={blueOption}>
                <Popup>Production Way-University Station<br />| Milleniun Line & Expo Line |</Popup>
            </Marker>



            <Polyline pathOptions={blueOption} positions={polyline} />
            <Polyline pathOptions={blueOption} positions={lougheedline} />

        </MapContainer></>
    )
}