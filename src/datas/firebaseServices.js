import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import { doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore";
import config from '../configuration';
import { async } from '@firebase/util';

const app = initializeApp(config.firebase);
const analytics = getAnalytics(app);
const store = getFirestore(app);

export async function getSitesAll(){
    let liste = [];
    let ref = collection(store, 'site');
    let snaps = await getDocs(ref);
    snaps.forEach((snap)=>{
        let map = {
            id: snap.id,
            nom: snap.data().nom,
            longitude: snap.data().longitude,
            latitude: snap.data().latitude,
            idVille: snap.data().idVille
        }
        liste.push(map);
    });
    return liste;
}

export async function registerClient(){
    let liste = [];
    let ref = collection(store, 'site');
    let snaps = await getDocs(ref);
    snaps.forEach((snap)=>{
        let map = {
            id: snap.id,
            nom: snap.data().nom,
            longitude: snap.data().longitude,
            latitude: snap.data().latitude,
            idVille: snap.data().idVille
        }
        liste.push(map);
    });
    return liste;
}