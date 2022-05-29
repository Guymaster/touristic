import React from 'react';
import '../styles/SiteInfoBox.css';

export default function SiteInfoBox({id, nom, description, img, note}){
    let clss = (id)? 'notEmpty' : 'empty';
    return (
        <>
            <div id='box' className={clss}>
                <div className='boxEmpty'>
                    <div>Cliquez sur un Site Touristique</div>
                    <div id='choixVilleBTN'>Choisir une Ville</div>
                </div>
                <div className='boxNotEmpty'>
                    <img src={img}/>
                    <div id='nom'> {nom} </div>
                    <div id='note'>
                        {note}
                    </div>
                    <div id='description'>
                        {description}
                    </div>
                </div>
            </div>
        </>
    );
}