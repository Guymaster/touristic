import React from 'react';
import baselique from '../datas/sites/basilique.js';
import './styles/VoirSite.css';
import { useState } from 'react';
import { verifierConnexionClient, deconnexionClient, addAvis } from '../datas/firebaseServices';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';

export default function VoirSite(){
    const [user, setUser] = useState(null);
    var infos;
    const navigate = useNavigate();
    function versErreur(){
      navigate("/error");
    }
    let url = new URL(window.location.href);
    let id = url.searchParams.get('id')
    if(id=='basiliqueYamoussoukro'){
        infos = baselique;
        console.log('OK', infos, baselique)
    }
    else{
        console.log("LOG", infos)
        versErreur();
    }
    const auth = getAuth();
      function versVille(){
        navigate("/ville?id="+infos.idVille);
      }
      
      React.useEffect(() => {
        onAuthStateChanged(auth, (luser) => {
            alert('state changed')
            console.log('USSSEEEER', luser)
            if (luser) {
              setUser(luser);
              alert('ici')
            } else {
              setUser(null);
            }
            console.log('userFFF', user)
          });
        
      }, [])
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
                <div className='villeBox' onClick={versVille()}>
                    Voir Abidjan
                </div>
            </div>
        </>
    );
}