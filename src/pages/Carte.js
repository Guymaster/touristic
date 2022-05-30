import React, { useState } from 'react';
import './styles/Carte.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import basiliqueIMG from '../assets/sites/baselique.jpg';
import foretIMG from '../assets/sites/arbre.jpg';
import mapboxgl, { Marker } from 'mapbox-gl';
import config from '../configuration';
import { useEffect } from 'react';
import * as FS from './../datas/firebaseServices.js';
import SiteInfoBox from './components/SiteInfoBox';
import { useNavigate } from 'react-router-dom';

export default function Carte(){
    let image;
    const navigate = useNavigate();
    function versSite(carte){
      navigate("/site?id="+carte);
    }
    const [hoveredSite, setHoveredSite] = useState({nom: null, description: null, note: null, image: null, id: null});
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
        
        //Ajoutons les marqueurs
        FS.getSitesAll().then((snaps)=>{
            snaps.forEach((snap)=>{
                let markElt = document.createElement('a');
                markElt.setAttribute('class', 'marker');
                markElt.innerHTML = '<svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M58.31 24.814L44.187 90.339 27.05 50.894c-3.463 13.536-3.63 28.752-2.328 42.395 7.427 74.81 70.83 162.556 154.83 236.173 15.377-15.942 30.388-32.237 44.783-48.732 6.82-7.815 13.5-15.678 20.018-23.568-59.05-73.228-104.055-148.414-115.58-214.524-4.027-11.108-15.646-14.908-25.596-17.36l11.53 19.868-31.305-22.445c-8.441-.189-17.618.604-25.092 2.113zm370.083-2.107c-2.92 13.842-5.738 27.685-15.046 41.527-.164-13.921-2.092-26.96-7.856-38.082-8.462 2.643-20.526 7.494-22.291 16.486-13.393 76.824-71.978 165.906-145.301 249.926C172.826 367.13 95.984 437.277 27.608 489.355c80.91-12.026 184.614-63.92 272.556-133.086 27.835-21.892 54.063-45.515 77.6-70.025-6.727 1.124-13.617 1.631-20.291 1.77l58.447-45.325c39.982-50.437 66.671-102.466 71.33-149.4.915-9.209 1.368-22.729-.642-34.805-2.01-12.077-6.486-21.931-13.252-26.371-8.677-5.693-24.034-9.17-39.578-9.45a98.183 98.183 0 0 0-5.385.044zM331.34 354.146a859.987 859.987 0 0 1-20.049 16.271 870.556 870.556 0 0 1-39.12 29.034c22.924 14.884 46.287 28.409 69.511 40.25a13010.71 13010.71 0 0 1 57.932 7.04c-5.536 5.312-11.915 8.882-18.942 11.292 36.526 15.689 71.873 26.592 103.694 31.322-49.14-37.427-102.652-84.185-153.026-135.209z"/></svg>';
                console.log(snap.longitude, snap.latitude)
                let marker = new Marker({
                    anchor: 'center',
                    element: markElt,
                }).setLngLat([snap.longitude, snap.latitude]).addTo(map);
                markElt.addEventListener('mouseenter', ()=>{
                    setHoveredSite({nom: snap.nom, description: snap.description, note: snap.note, image: snap.image, id: snap.id});
                });
                markElt.addEventListener('mouseleave', ()=>{
                    setHoveredSite({nom: null, description: null, note: null, image: null, id: null});
                });
                markElt.addEventListener('click', ()=>{
                    versSite(snap.id);
                });
            });
        });
      }, []);
    
    if(hoveredSite.id=='basiliqueYamoussoukro'){
        image = basiliqueIMG;
    }
    else{
        image = foretIMG;
    }
    return (
        <>
            <div id='carte' className='carteCache'></div>
            <SiteInfoBox img={image} id={hoveredSite.id} nom={hoveredSite.nom} description={hoveredSite.description} note={hoveredSite.note}/>
        </>
    );
}