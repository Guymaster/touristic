import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Acceuil from './pages/Acceuil.js';
import Carte from './pages/Carte.js';
import ChoisirHotel from './pages/ChoisirHotel.js';
import ConfirmerSejour from './pages/ConfirmerSejour.js';
import ErrorPage from './pages/ErrorPage.js';
import VoirSite from './pages/VoirSite.js';
import VoirVille from './pages/VoirVille.js';
import Inscription from './pages/Inscription.js';
import Connexion from './pages/Connexion.js';
import PlanifierSejour from './pages/PlanifierSejour.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Acceuil />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/ville" element={<VoirVille />} />
            <Route path="/site" element={<VoirSite />} />
          <Route path="/confirmerSejour" element={<ConfirmerSejour />} />
          <Route path="/choisirHotel" element={<ChoisirHotel />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/planifier" element={<PlanifierSejour />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
