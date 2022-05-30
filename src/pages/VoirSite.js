import React from 'react';
import baselique from '../datas/sites/basilique.js';
import './styles/VoirSite.css';
import { useState } from 'react';
import { verifierConnexionClient, deconnexionClient, addAvis } from '../datas/firebaseServices';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';

export default function VoirSite(){
    var infos;
    const navigate = useNavigate();
    function versErreur(){
      navigate("/error");
    }
    let url = new URL(window.location.href);
    let id = url.searchParams.get('id')
    if(id=='basiliqueYamoussoukro'){
        infos = baselique;
        alert('oui')
    }
    else{
        versErreur();
        alert('non')
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
        console.log('user', user)
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
                <div className='avisBox'>
                    <div className='laisserBox'>
                        <textarea placeholder='Entrez du texte ici'disabled={user==null} rows='10' cols='60' id='commIn' ></textarea>
                        <div className='noteBox' > <label htmlFor='noteArea'>Entrez une note</label> <input type='number' max='5' min='0' step='0.5' disabled={user==null} id='noteIn' /> </div>
                        <button className={(user==null)?'laisserBTN disabled':'laisserBTN'}>Laisser un avis</button>
                    </div>
                    <div className='commBox'>
                        <div className='commItem'>
                            <div className='commItemHead'>
                                <div className='commItemPhoto'></div>
                                <div className='commItemNom'>John Doe</div>
                                <div className='commItemNote'>4.5/5</div>
                            </div>
                            <div className='commItemBody'>
                                lorem ipsum zfzeg zgzg zgzgzg zgzgzg zgzg fsqc aqcvazv av
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='villeBox'>
                    Voir Abidjan
                </div>
            </div>
        </>
    );
}