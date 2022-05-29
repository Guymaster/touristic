import React from 'react';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import './styles/Acceuil.css';
import carou1 from '../assets/carou1.jpg';
import carou2 from '../assets/carou2.jpg';
import { useState } from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide'

export default function Acceuil(){
    const options = {
        type         : 'loop',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
      };
    return (
        <>
            <div id='corps'>
                <div className='splide'>
                    <Splide aria-label="My Favorite Images" options={options}>
                        <SplideSlide>
                            <img src={carou1} alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={carou2} alt="Image 2"/>
                        </SplideSlide>
                    </Splide>
                </div>
                <div className='head'>
                    <div id='carteBTN'>Aller à la Carte</div>
                    <div id='userBox'>
                        <img id='profileIMG' src="#"/>
                        <div id='connectBTN'>Se Connecter</div>
                    </div>
                </div>
            </div>
        </>
    );
}