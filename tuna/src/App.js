import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hakkimizda' element={<About/>}/>
        {/* <Route path='/hizmetlerimiz' element={<Home/>}/> */}
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
