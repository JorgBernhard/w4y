import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Pages/Main/Main';
import What from './Pages/What/What';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    <What />
    <Projects />
    <Contact />
  </React.StrictMode>
);
