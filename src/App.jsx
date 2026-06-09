import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RioDeJaneiro from './components/RioDeJaneiro';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      
      {/* Área Principal de Conteúdo */}
      <main className="main-content">
        <Header />
        
        <div className="content-container">
          {/* O App.jsx apenas chama os blocos de cada cidade aqui */}
          <RioDeJaneiro />
        </div>
      </main>

      {/* Menu Lateral que faz as âncoras e direcionamentos */}
      <Sidebar />

    </div>
  );
}