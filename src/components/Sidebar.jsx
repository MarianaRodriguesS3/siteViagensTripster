import React from 'react';
import './Sidebar.css';

export default function Sidebar({ setCidadeAtiva }) {
  const handleClick = (cidade, e) => {
    e.preventDefault(); // Evita que o link faça scroll ou recarregue a página
    setCidadeAtiva(cidade); // Atualiza o estado da cidade no App
  };

  return (
    <aside className="sidebar-lateral">
      <div className="sidebar-logo">
        <h3>
          Tripster
          <img
            src="/midia/logo-tripster.png"
            alt="Avião dando a volta no planeta"
            className="logo-img-emoji"
          />
        </h3>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#rio" onClick={(e) => handleClick('rio', e)}>Rio de Janeiro</a>
          </li>
          <li>
            <a href="#fortaleza" onClick={(e) => handleClick('fortaleza', e)}>Fortaleza</a>
          </li>
          <li>
            <a href="#florianopolis" onClick={(e) => handleClick('florianopolis', e)}>Florianópolis</a>
          </li>
          <li>
            <a href="#aires" onClick={(e) => handleClick('aires', e)}>Buenos Aires</a>
          </li>
          <li>
            <a href="#bariloche" onClick={(e) => handleClick('bariloche', e)}>Bariloche</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}