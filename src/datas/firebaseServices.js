import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import { doc, getDoc, getFirestore, collection, getDocs, setDoc, addDoc } from "firebase/firestore";
import config from '../configuration';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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
            description: snap.data().description,
            idVille: snap.data().idVille
        }
        liste.push(map);
    });
    return liste;
}

export async function getAvisAll(){
    

    let myPromise = new Promise(function(resolve, reject) {
    let liste = [];
    let ref = collection(store, 'avis');
    let snaps = await getDocs(ref);
    snaps.forEach((snap)=>{
        let map = {
            id: snap.id,
            idClient: snap.data().idClient,
            note: snap.data().note,
        }
        liste.push(map);
    });
    for(let i = 0; i<liste.length; i++){
        let docRef = doc(store, "avis", liste[i].idClient);
        let cl = await getDoc(docRef);
        liste[i].nomClient = cl.data().prenoms + " " + cl.data().nom
    }
    resolve(liste);
    });

    let res = await myPromise;
    return res;
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


export async function deconnexionClient(){
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log('deco')
    }).catch((error) => {
        console.log('non deco')
    });
}

export async function addAvis(){
    let note = document.getElementById('noteIn').value
    let comm = document.getElementById('commIn').value
    const auth = getAuth();
    auth.onAuthStateChanged(async (user)=>{
        alert('c eu');
        const docRef = await addDoc(collection(store, "avis"), {
            idClient: user.uid,
            note: note,
            commentaire: comm
          });
    })
    
}