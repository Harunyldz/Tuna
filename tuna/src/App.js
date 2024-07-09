import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Services from './pages/Services/Services.jsx';
import Trainings from './pages/Trainings/Trainings.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ScrollToTop from './utils/ScrollToTop.js';
import TeklifAl from './pages/TeklifAl/TeklifAl.jsx';
import Referans from './components/Referans/Referans.jsx';
import Info from './pages/Info/Info.jsx';
import AcilDurumPlan from './pages/Cards/AcilDurumPlan.jsx';
import IsyeriHekimi from './pages/Cards/IsyeriHekimi.jsx';
import DigerSaglikPersoneli from './pages/Cards/DigerSaglikPersoneli.jsx';
import IsGuvenligiUzmani from './pages/Cards/IsGuvenligiUzmani.jsx';
import IsGuvenligiEgitimi from './pages/Cards/IsGuvenligiEgitimi.jsx';
import RiskAnalizi from './pages/Cards/RiskAnalizi.jsx';
import HijyenEgitimi from './pages/Cards/HijyenEgitimi.jsx';
import YanginEgitimi from './pages/Cards/YanginEgitimi.jsx';
import YuksekteCalismaEgitimi from './pages/Cards/YuksekteCalismaEgitimi.jsx';
import NaceKodu from './pages/Cards/NaceKodu.jsx';
import IsgKatipOnayi from './pages/Cards/IsgKatipOnayi.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar/>
      <div className="app-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hakkimizda' element={<About />} />
          <Route path='/hizmetlerimiz' element={<Services />} />
          <Route path='/egitimlerimiz' element={<Trainings />} />
          <Route path='/hizmetlerimiz/is-guvenligi-uzmani' element={<IsGuvenligiUzmani />} />
          <Route path='/hizmetlerimiz/risk-analizi' element={<RiskAnalizi />} />
          <Route path='/hizmetlerimiz/acil-durum-plani' element={<AcilDurumPlan />} />
          <Route path='/hizmetlerimiz/diger-saglik-personeli' element={<DigerSaglikPersoneli />} />
          <Route path='/hizmetlerimiz/is-yeri-hekimi' element={<IsyeriHekimi/>} />
          <Route path='/egitimlerimiz/hijyen-egitimi' element={<HijyenEgitimi />} />
          <Route path='/egitimlerimiz/is-guvenligi-egitimi' element={<IsGuvenligiEgitimi />} />
          <Route path='/egitimlerimiz/yangin-egitimi' element={<YanginEgitimi />} />
          <Route path='/egitimlerimiz/yuksekte-calisma-egitimi' element={<YuksekteCalismaEgitimi />} />
          <Route path='/info' element={<Info/>} />
          <Route path='/nace' element={<NaceKodu />} />
          <Route path='/isgKatipNasil' element={<IsgKatipOnayi />} />
          <Route path='/iletisim' element={<Contact />} />
          <Route path='/teklifAl' element={<TeklifAl/>} />
          <Route path='/referans' element={<Referans />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
