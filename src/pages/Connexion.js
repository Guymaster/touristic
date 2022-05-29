import React from 'react';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import './styles/Inscription.css';
import { useState } from 'react';

export default function Connexion(){
    return (
            <>
                <div class="container" id="container">
                    <div class="form-container ">
                        <form action="">
                            <img src="../ressources/abstract-user-flat-1.png" alt="" class="user"/>
                            <input type="text" name="nom" id="nom" placeholder="Nom"/>
                            <input type="text" name="prenon" id="prenom" placeholder="Prenom"/>
                            <input type="text" name="telephone" id="telephone" placeholder="Telephone"/>
                            <input type="text" name="adresse" id="adresse" placeholder="Adresse"/>
                            <input type="email" name="email" id="email" placeholder="Email"/>
                            <input type="password" name="motdepasse" placeholder="Mot de passe"/>

                            <button>Inscription</button>
                        </form>    

                    </div>
                </div>
                <div class="form-container basilic">
                    <img src="../ressources/im.jpg" alt=""/>
                </div>
            </>
            );
}