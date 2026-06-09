import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
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
                    <li><a href="#rio">Rio de Janeiro</a></li>
                    <li><a href="#fortaleza">Fortaleza</a></li>
                    <li><a href="#florianopolis">Florianópolis</a></li>
                    <li><a href="#aires">Buenos Aires</a></li>
                    <li><a href="#bariloche">Bariloche</a></li>
                </ul>
            </nav>
        </aside>
    );
}