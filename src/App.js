import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Vehicle from "./components/VehiclesList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Menu />} />
          <Route path="/vehicles" element={<Vehicle/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;