import React from 'react';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import './styles/Inscription.css';
import { useState } from 'react';
import profileLogo from '../assets/userLogo.png';
import hotel from '../assets/hotel.jpg';

export default function Inscription(){
    return (
            <>
                <div className="container" id="container">
                    <div className="form-container ">
                        <div>
                        <form action="">
                            <img src={profileLogo} alt="" className="user"/>
                            <input type="text" name="nom" id="nom" placeholder="Nom"/>
                            <input type="text" name="prenon" id="prenom" placeholder="Prenom"/>
                            <input type="text" name="telephone" id="telephone" placeholder="Telephone"/>
                            <input type="text" name="adresse" id="adresse" placeholder="Adresse"/>
                            <input type="email" name="email" id="email" placeholder="Email"/>
                            <input type="password" name="motdepasse" placeholder="Mot de passe"/>
                            <input type="confpassword" name="confmotdepasse" placeholder="Confirmer Mot de passe"/>
                            <button>Inscription</button>
                        </form>
                        </div>
                        <div className="form-container basilic">
                            <img src='' alt=""/>
                        </div>
                    </div>
                </div>
            </>
            );
}