import React from 'react';
import './styles/PlanifierSejour.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ConfirmerSejour(){
    const url = new URL(window.location.href);
    let hotel = url.searchParams.get('idHotel');
    let ville = url.searchParams.get('idVille');
    let deb = url.searchParams.get('dateDeb');
    let fin = url.searchParams.get('dateFin');
    function confirmer(){
        alert('ok')
    }
    return (
        <>
            <div className='formBox'>
                <p>
                    Vous planifiez un séjour dans la ville {ville}, à l'hotel {hotel} 
                    <br/>
                    Le séjour débutera le {deb} et se terminera le {fin}
                </p>
                <div className='suivBTN'>Suivant</div>
            </div>
        </>
    );
}