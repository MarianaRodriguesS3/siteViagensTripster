import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RioDeJaneiro from './components/Rio';
import Fortaleza from './components/Fortaleza';

import './App.css';

export default function App() {
  const [cidadeAtiva, setCidadeAtiva] = useState('rio');

  return (
    <div className="app-wrapper">

      {/* Sidebar controla qual cidade aparece */}
      <Sidebar setCidadeAtiva={setCidadeAtiva} />

      {/* Área Principal de Conteúdo */}
      <main className="main-content">
        <Header />

        <div className="content-container">
          {cidadeAtiva === 'rio' && <RioDeJaneiro />}
          {cidadeAtiva === 'fortaleza' && <Fortaleza />}
        </div>
      </main>

    </div>
  );
}