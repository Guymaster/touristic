import React from 'react';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import './styles/Inscription.css';
import { useState } from 'react';
import profileLogo from '../assets/userLogo.png';
import hotel from '../assets/hotel.jpg';
import { registerClient } from '../datas/firebaseServices';
import { useNavigate } from 'react-router-dom';

export default function Inscription(){
    const navigate = useNavigate();
    const tenterInscription = ()=>{
        console.log('appuyé')
        let email = document.getElementById('email').value;
        let nom = document.getElementById('nom').value;
        let prenoms = document.getElementById('prenom').value;
        let tel = document.getElementById('telephone').value;
        let adresse = document.getElementById('adresse').value;
        let mdp = document.getElementById('mdp').value;
        let cmdp = document.getElementById('confMdp').value;
        let photo = document.getElementById('photo').files[0];
    
        console.log('mdp', photo)
        if(mdp==cmdp){
            console.log('egal')
            registerClient(email, mdp, nom, prenoms, tel, adresse, photo).then((res)=>{
                console.log(res);
                navigate('/');
            });
        }
    }
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
                            <input type="file" name="photo" id="photo" accept='.png,.jpg,.jpeg' placeholder="Sélectionnez une Photo"/>
                            <input type="password" name="motdepasse" placeholder="Mot de passe" id='mdp'/>
                            <input type="password" name="confmotdepasse" placeholder="Confirmer Mot de passe" id='confMdp' />
                            <button type='button' onClick={tenterInscription}>Inscription</button>
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

