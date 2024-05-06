import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Projects from './pages/Projects'; 
import DetailProjet from './pages/DetailProjet';
import Error404 from './pages/404';

function App() {
  return (
    <Router basename="/portfolio">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home name="Home"/>} />
          <Route path="/Apropos" element={<Apropos name="Apropos"/>} />
          <Route path="/projet/:idprojet" element={<DetailProjet nom="projet"/>} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/*" element={<Error404 nom="Erreur" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
