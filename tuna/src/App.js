import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import IsGvUzm from './components/Cards/IsGvUzm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hakkimizda' element={<About />} />
        <Route path='/is-guvenligi-uzmani' element={<IsGvUzm />} />
        {/* <Route path='/hizmetlerimiz' element={<Home/>}/> */}
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
