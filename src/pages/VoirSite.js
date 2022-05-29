import React from 'react';
import basiIMG from '../assets/baselique1.jpg';
import './styles/VoirSite.css'

export default function VoirSite(){
    return (
        <>
            <div className="image">
        <h2> NOTRE DAME DE DE LA PAIX</h2>

    </div>
    <div className="texte">
        <div className="composant">
            <h1>Présentation</h1>
            <ul>
                <li>Nom Local: <span>Baselique notre Dame de la paix</span></li>
                <li>culte: <span>catholique romain</span></li>
                <li>Type :<span>Baselique </span></li>
                <li>Date d'inauguration:<span>1989</span></li>
                <li>Architect:<span>Pierre Fakhoury</span></li>

            </ul>
        </div>
        <div className="composant">
            <h1>Géographie</h1>
            <ul>
                <li>Pays:<span>Côte d'Ivoire</span></li>
                <li>Ville: <span>Yamoussoukro</span></li>
                <li>coordonnées: <span>6°48'40' nord,5° 1749 ouest</span></li>
                <li>sol
                    <span></span>:<span>marbe importé d'italie, d'Espagne et du portugal</span></li>
            </ul>
        </div>
        <div className="composant">
            <h1>Dimenssion</h1>
            <ul>
                <li>Superficie : <span>30 000 m2</span></li>
                <li>Volume : <span>800 000 m3</span></li>
                <li>Largeur : <span>150 m</span></li>
                <li>Profondeur : <span>30 m</span></li>
                <li>Population : <span>18 000 personnes</span></li>
            </ul>
        </div>
    </div>

    <div id="section">
        <div className="wrapper">
            <div className="form-wrapper">
                <form>
                    <h1>Laissé un avis</h1>
                    <div className="separation"></div>
                    <div className="corps-formulaire">
                        <div className="droite">
                            <div className="groupe">
                                <label htmlFor="#">Méssage</label>
                                <textarea placeholder="Saisissez ici..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="piedformulaire" align="center">
                        <button>Envoyer le message</button>
                    </div>
                </form>
            </div>

            <div className="advises">
                <div class="inner-advises">
                    <h1>Avis Clients</h1>

                    <div className="box-wrapper">
                        <div className="box">
                            <div className="inner-box">
                                <div className="user">
                                    <div className="picture">
                                        <img src="..//imgAPP/tete1.jpg" alt="teteimage"/>
                                    </div>
                                    <div className="username">John Doe</div>
                                    <div className="stars">
                                        <div className="stars-wrapper">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-alt "></i>
                                        </div>
                                    </div>
                                </div>
                                <p className="comment ">
                                    C'est wonderfull j'ai vraiment apprecié l'animation du site Merci beaucoup pour m'avoir offert une tres bonne visiblité de notre dame de la paix, sans m'etre deplacer. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aut porro ab illo magni
                                    nam sit beatae
                                </p>
                            </div>
                        </div>
                        <div className="box ">
                            <div className="inner-box ">
                                <div className="user ">
                                    <div className="picture ">
                                        <img src="/imgAPP/tete2.jpg "/>
                                    </div>
                                    <div className="username ">John Doe</div>
                                    <div className="stars ">
                                        <div className="stars-wrapper">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <p className="comment ">
                                    Je suis très satisfait de la beauté et de l'animation de du site. Sa donne vraiment un avant gout du site Notre dame de la paix. je doutais jusqu'a present de la beauté et de sa grandeur , et grace a vous tout est clair.Je viendrai faire une visite le
                                    mois prochain
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}