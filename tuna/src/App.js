import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import IsGvUzm from './components/Cards/IsGvUzm';
import RiskAnaliz from './components/Cards/RiskAnaliz';
import AcilDrmPln from './components/Cards/AcilDrmPln';
import Dsp from './components/Cards/Dsp';
import Hkm from './components/Cards/Hkm';
import Info from './components/Cards/Info';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hakkimizda' element={<About />} />
        <Route path='/hizmetlerimiz' element={<Services />} />
        <Route path='/hizmetlerimiz/is-guvenligi-uzmani' element={<IsGvUzm />} />
        <Route path='/hizmetlerimiz/risk-analizi' element={<RiskAnaliz />} />
        <Route path='/hizmetlerimiz/acil-durum-plani' element={<AcilDrmPln />} />
        <Route path='/hizmetlerimiz/diger-saglik-personeli' element={<Dsp />} />
        <Route path='/hizmetlerimiz/is-yeri-hekimi' element={<Hkm />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
