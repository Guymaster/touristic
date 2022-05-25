import React from 'react';
import './styles/Carte.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import config from '../configuration';
import { useEffect } from 'react';

export default function Carte(){
    const etendue = new mapboxgl.LngLatBounds(
        new mapboxgl.LngLat(-8.695002641378096, 11.193029455359323),
        new mapboxgl.LngLat(-1.2068389083279938, 4.072716763388659)
    );
    useEffect(() => {
        setTimeout(()=>{
            document.getElementById('carte').setAttribute('class', '');
        }, 2000);
        mapboxgl.accessToken = config.mapbox.accessToken;
        const map = new mapboxgl.Map({
        container: 'carte',
        style: config.mapbox.mapStyle,
        center: [-5.5471, 7.546855],
        zoom: 6,
        //maxBounds: etendue
        });
      }, []);
    return (
        <>
            <div id='carte' className='carteCache'>
            </div>
        </>
    );
}