import React from "react";
import "../src/index.scss";
import Home from "./pages/Home";
import About from "./pages/About";
// import Flat from "./pages/FlatCard";
import Error404 from "./pages/Error404";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/About' element={<About/>} />
          {/* <Route path='/flat' element={<Flat/>} /> */}
          <Route path='/*' element={<Error404/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
