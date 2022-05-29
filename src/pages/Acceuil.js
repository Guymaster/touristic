import React from 'react';
import './styles/ubuntu.css';
import './styles/Acceuil.css';
import carou1 from '../assets/carou1.jpg';
import carou2 from '../assets/carou2.jpg';
import carou3 from '../assets/arbre.jpg'
import { useState } from 'react';

export default function Acceuil(){
    return (
        <>
            <div id='contenu'>
                <div>egzeg</div>
                <div className='head'>
                    <div id='carteBTN'>Aller à la Carte</div>
                    <div id='userBox'>
                        <img id='profileIMG' src="#"/>
                        <div id='connectBTN'>Se Connecter</div>
                    </div>
                </div>
                <div id='back'>qzfaze</div>
                <div id='texte'>
                    VISUALISEZ ET VISITEZ DES LIEUX EXCEPTIONNELS EN COTE D'IVOIRE
                </div>
            </div>
        </>
    );
}