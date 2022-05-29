import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import { doc, getDoc, getFirestore, collection, getDocs, setDoc } from "firebase/firestore";
import config from '../configuration';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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

export async function registerClient(email, password, nom, prenoms, telephone, adresse, photo){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then( async (userCredential) => {
            console.log('On store')

          await setDoc(doc(store, "client", userCredential.user.uid), {
            nom: nom,
            prenoms: prenoms,
            email: email,
            telephone: telephone,
            adresse: adresse
          });
    })
    .catch((error) => {
        return false;
    });
}

export async function connexionClient(email, password){
    let res;
    const auth = getAuth();
    let myPromise = new Promise(function(resolve, reject) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            resolve(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            resolve(null);
        });
      });
      res = await myPromise;
      return res;
}

export async function verifierConnexionClient(){
    let res;
    const auth = getAuth();
    let myPromise = new Promise(function(resolve, reject) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              resolve(user);
            } else {
              resolve(null);
            }
          });
      });
      res = await myPromise;
      return res;
}