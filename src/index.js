import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Me from './Pages/Me/Me';
import Projetos from './Pages/Projetos/Projetos';
import Contact from './Pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Me />
    <Projetos />
    <Contact />
  </React.StrictMode>
);