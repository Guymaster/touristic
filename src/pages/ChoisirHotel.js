import React from 'react';
import hotel2 from '../assets/hotels/2.jpg';
import hotel3 from '../assets/hotels/3.jpg';
import './styles/ChoisirHotel.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ChoisirHotel(){
    const navigate = useNavigate();
    function versPlanifier(idHotel){
        let url = new URL(window.location.href);
        let ville = url.searchParams.get('idVille');
        navigate("/planifier?idHotel="+idHotel+"&idVille="+ville);
    }
    return (
        <>

<section class="service" id="service">
        <div class="titre-text">
            <h1>Choisissez un Hotel pour Continuer</h1>
        </div>
        <div class="touristic_boite">
            <div class="service_unique">
                <img src={hotel2} alt="" width="100" height="500" flex-basis="500%"/>
                <div class="service_btn" onClick={versPlanifier('MOLOME')}>
                        <a href="#"> <span></span> Choisir cet hotel</a>
                </div>
                <div class="text_sur">
                    <div class="descrip">
                        <h3>HOTEL MOLOME</h3>
                        <p>L'hôtel Molomé est un établissement hôtellier situé au quartier Riviéra dans la ville de Yamoussoukro dans le prolongement du CCDO le prix s'élève à 20000fr/jour.</p>
                    </div>
                </div>
            </div>
            <div class="service_unique">
                    <img src={hotel2} alt=""  width="100" height="500" flex-basis="500%"/>
                    <div class="service_btn" onClick={versPlanifier('KLAIHOUA')}>
                            <a href="#"> <span></span> Choisir cet hotel</a>
                    </div>
                    <div class="text_sur">
                        <div class="descrip">
                            <h3>HOTEL KLAIHOUA</h3>
                            <p>L'Hotel Klaihoua est situé à Yamoussoukro, à moins de 5 km de la mosquée et à 7 km de l'ONUCI Banbat. Un restaurant est présent. Il propose gratuitement un parking privé et une connexion Wi-Fi dans l'ensemble des locaux.

                                Les hébergements climatisés comprennent un bureau et une télévision par câble à écran plat.
                                
                                Un petit-déjeuner continental est servi.
                                
                                Le personnel de la réception parle français et anglais.
                                
                                La basilique Notre-Dame de la Paix de Yamoussoukro est à 9 km.
                                
                                Nous parlons votre langue le prix s'élève à 20000fr/jour </p>
                        </div>
                    </div>
                </div>
            <div class="service_unique">
                        <img src={hotel3} alt=""  width="100" height="500" flex-basis="500%"/>
                        <div class="service_btn" onClick={versPlanifier('PRESIDENT')}>
                                <a href="#"> <span></span> Choisir cet hotel</a>
                        </div>
                        <div class="text_sur">
                            <div class="descrip">
                                <h3>HOTEL PRESIDENT</h3>
                                <p>Niché dans un écrin de verdure, l'hôtel Président consiste en un Bâtiment classique de 146 chambres (inauguré en 1973) 

                                    accolé d'une Tour de 139 chambres (inaugurée en 1980) surmontée d'un restaurant panoramique. L'auteur en est Olivier Cacoub, dit « l'architecte du Vieux » (surnom affectueux du président de l'époque, Félix Houphouët-Boigny). Le hall de la Tour, avec ses hauts piliers de marbre et ses lustres, n'est pas sans évoquer, mais en plus petit, celui de la Fondation pour la recherche de la  paix du même architecte.
                                    
                                    Avec 285 chambres et suites, 16 salles de conférence, 4 restaurants, un alocodrome et un espace champêtre, l’hôtel Président dispose d'une capacité d'accueil interne de 2 000 personnes.
                                    
                                    L'hôtel Président fait partie des édifices de prestige, monumentaux ou futuristes, construits par l'ancien président Félix Houpouët-Boigny dans son village natal, devenu en 1983 la capitale de la Côte d'Ivoire le prix s'élève à 40000fr/jour</p>
                            </div>
                        </div>
                </div>    
        </div>
    </section>
            {/* <div className='contenu'>
                <div className='titrePage'>Choisissez un Hotel</div>
                <div className='hotelBox'>
                    zefzez
                </div>
            </div> */}
        </>
    );
}