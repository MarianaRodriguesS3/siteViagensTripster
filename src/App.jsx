import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import RioDeJaneiro from './components/Rio';
import Fortaleza from './components/Fortaleza';
import Florianopolis from './components/Florianopolis';
import BuenosAires from './components/BuenosAires';
import Bariloche from './components/Bariloche';

import './App.css';

export default function App() {
  const [cidadeAtiva, setCidadeAtiva] = useState('rio');
  const [animKey, setAnimKey] = useState(0);

  const trocarCidade = (cidade) => {
    setCidadeAtiva(cidade);
    setAnimKey(prev => prev + 1);
  };

  return (
    <div className="app-wrapper">

      <Sidebar setCidadeAtiva={trocarCidade} />

      <main className="main-content">
        <Header key={animKey} />

        <div className="content-container">
          {cidadeAtiva === 'rio' && <RioDeJaneiro key={animKey} />}
          {cidadeAtiva === 'fortaleza' && <Fortaleza key={animKey} />}
          {cidadeAtiva === 'florianopolis' && <Florianopolis key={animKey} />}
          {cidadeAtiva === 'aires' && <BuenosAires key={animKey} />}
          {cidadeAtiva === 'bariloche' && <Bariloche key={animKey} />}
        </div>
      </main>

    </div>
  );
}