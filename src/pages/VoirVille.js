import React from 'react';
import abidjan from '../datas/villes/abidjan.js';
import { useState } from 'react';
import { verifierConnexionClient, deconnexionClient, addAvis } from '../datas/firebaseServices';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/VoirSite.css';

export default function VoirVille(){
    var infos;
    const navigate = useNavigate();
    function versErreur(){
      navigate("/error");
    }
    let url = new URL(window.location.href);
    let id = url.searchParams.get('id')
    if(id=='ABIDJAN'){
        infos = abidjan;
    }
    else{
        versErreur();
    }
    const {state} = useLocation();
    console.log('id', state)

    const [user, setUser] = useState(null);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        console.log('state changed')
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
      function soummettreAvis(){
          let idClient = user.uid;
          let note = document.getElementById('noteIn').value;
          let comm = document.getElementById('commIn').value;
          addAvis(idClient, note, comm).then(()=>{console.log('c fait')})
      }
    return (
        <>
            <div id='contenu'>
                <div id='planifBTN'>Planifier un Séjour</div>
                <div className='imgBox'>
                    <img src={infos.image}/>
                </div>
                <div className='nomSite'>{infos.nom}</div>
                <div className='partBox'>
                    <div className='partItem'>
                        <div className='partItemTitre'>Présentation</div>
                        {
                            infos.presentation.map(function(item, i){
                                return <div className='partItemRow'>
                                    <span> {item.propNom}: </span> {item.propValue}
                                </div>
                              })
                        }
                    </div>
                    <div className='partItem'>
                        <div className='partItemTitre'>Géographie</div>
                        {
                            infos.geographie.map(function(item, i){
                                return <div className='partItemRow'>
                                    <span> {item.propNom}: </span> {item.propValue}
                                </div>
                              })
                        }
                    </div>
                    <div className='partItem'>
                        <div className='partItemTitre'>Dimensions</div>
                        {
                            infos.dimensions.map(function(item, i){
                                return <div className='partItemRow'>
                                    <span> {item.propNom}: </span> {item.propValue}
                                </div>
                              })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}