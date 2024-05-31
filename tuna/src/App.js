import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import IsGvUzm from './components/Cards/IsGvUzm';
import RiskAnaliz from './components/Cards/RiskAnaliz';
import AcilDrmPln from './components/Cards/AcilDrmPln';
import Dsp from './components/Cards/Dsp';
import Hkm from './components/Cards/Hkm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hakkimizda' element={<About />} />
        <Route path='/is-guvenligi-uzmani' element={<IsGvUzm />} />
        <Route path='/risk-analizi' element={<RiskAnaliz />} />
        <Route path='/acil-durum-plani' element={<AcilDrmPln />} />
        <Route path='/diger-saglik-personeli' element={<Dsp />} />
        <Route path='/is-yeri-hekimi' element={<Hkm />} />
        {/* <Route path='/hizmetlerimiz' element={<Home/>}/> */}
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
