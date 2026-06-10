import React from 'react';
import './Cidades.css';

export default function Florianopolis() {
    return (
        <section id="florianopolis" className="city-section">

            {/* 🖼️ Imagem fixa que fica por baixo de tudo */}
            <div className="city-image-fixed">
                <img src="/midia/florianopolis.jpg" alt="Florianópolis" />
            </div>

            {/* ✍️ Bloco de conteúdo que flutua e rola por cima */}
            <div className="city-container">

                {/* 🪄 Esta div controla o surgimento com efeito fade-in */}
                <div className="city-text-wrapper">
                    <h3 className="country-tag">Brasil</h3>
                    <h4>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.booking.com/city/br/florianopolis.pt.html">
                            Florianópolis - SC
                        </a>
                    </h4>
                    <div className="city-text">
                        <p>
                            Florianópolis, conhecida como a “Ilha da Magia”, é um dos destinos mais procurados do sul do Brasil.
                            A cidade combina belas praias, natureza preservada, esportes ao ar livre e uma rica cultura açoriana.
                        </p>
                        <p>
                            Entre os principais pontos turísticos estão a Praia Mole, a Joaquina, a Lagoa da Conceição e o Centro Histórico,
                            que mescla arquitetura colonial com gastronomia típica da região. Florianópolis é famosa também por seus festivais
                            e eventos culturais.
                        </p>
                        <p>
                            Para quem gosta de aventura, a cidade oferece trilhas, surf, windsurf e passeios de barco. Com praias para todos
                            os gostos, natureza exuberante e ótima infraestrutura turística, Florianópolis é ideal para famílias, jovens
                            e turistas que buscam contato com a natureza.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}