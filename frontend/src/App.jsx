import React from "react";
import './styles/App.scss';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Flat from './pages/card/FlatCard';
import Error404 from './pages/error404/404';
import Header from './components/Header';
// import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/flat' element={<Flat/>} />
          <Route path='/*' element={<Error404/>} />
        </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
