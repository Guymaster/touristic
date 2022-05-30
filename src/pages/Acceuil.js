import React from 'react';
import './styles/ubuntu.css';
import './styles/Acceuil.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifierConnexionClient, deconnexionClient } from '../datas/firebaseServices';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Acceuil(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    function versConnexion(){
        navigate('/connexion');
    }
    function versCarte(){
        navigate('/carte');
    }
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        console.log('state changed')
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
        console.log('user', user)
      });
    
    return (
        <>
            <div id='contenu'>
                <div>egzeg</div>
                <div className='head'>
                    <div id='carteBTN' onClick={versCarte}>Aller à la Carte</div>
                    <div id='userBox'>
                        {(user)?
                        <img id='profileIMG' src="#" onClick={ deconnexionClient }/>
                        :
                        <div id='connectBTN' onClick={versConnexion}>Se Connecter</div>}
                    </div>
                </div>
                <div id='back'></div>
                <div id='texte'>
                    VISUALISEZ ET VISITEZ DES LIEUX EXCEPTIONNELS EN COTE D'IVOIRE
                </div>
            </div>
        </>
    );
}