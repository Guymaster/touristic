import React from 'react';
import './styles/PlanifierSejour.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PlanifierSejour(){
    const navigate = useNavigate();
    function versConfirmer(){
        let url = new URL(window.location.href);
        let deb = document.getElementById('dateDeb').value;
        let fin = document.getElementById('dateFin').value;
        let hotel = url.searchParams.get('idHotel');
        let ville = url.searchParams.get('idVille');
        if(deb&&fin){
            navigate("/confirmer?idHotel="+hotel+"&idVille="+ville+"&dateDeb="+deb+"&dateFin="+fin);
        }
    }
    return (
        <>
            <div className='formBox'>
                <label htmlFor='dateDeb'>Quand souhaitez-vous y aller?</label>
                <input type='date' id='dateDeb'/>
                <label htmlFor='dateFin'>Quand souhaitez-vous revenir chez vous?</label>
                <input type='date' id='dateFin'/>
                <div className='suivBTN' onClick={versConfirmer()}>Suivant</div>
            </div>
        </>
    );
}