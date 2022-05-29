import React from 'react';
import './styles/Connexion.css';
import { useState } from 'react';
import profileLogo from '../assets/userLogo.png';
import { connexionClient } from '../datas/firebaseServices';
import { useNavigate } from 'react-router-dom';
import './styles/ubuntu.css';

export default function Connexion(){
    const navigate = useNavigate();
    function versInscription(){
        navigate('/inscription');
    }
    const tenterConnexion = ()=>{
        console.log('appuyé')
        let email = document.getElementById('email').value;
        let mdp = document.getElementById('mdp').value;
        connexionClient(email, mdp).then((res)=>{
            if(res){
                navigate('/');
            }
            else{
                alert("Identifiants Invalides");
            }
        });
    }
    return (
            <>
                <div className="container" id="container">
                    <div className="form-container ">
                        <div>
                        <form action="">
                            <img src={profileLogo} alt="" className="user"/>
                            <input type="email" name="email" id="email" placeholder="Email"/>
                            <input type="password" name="motdepasse" placeholder="Mot de passe" id='mdp'/>
                            <button type='button' onClick={tenterConnexion}>Connexion</button>
                            <div id='texteInscri'>
                                Vous n'avez pas de compte? <span onClick={versInscription}>Inscrivez-vous!</span>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </>
            );
}

