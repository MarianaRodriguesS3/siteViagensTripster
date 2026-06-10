import React from 'react';
import './Cidades.css';

export default function Bariloche() {
    return (
        <section id="bariloche" className="city-section">

            {/* 🖼️ Imagem fixa que fica por baixo de tudo */}
            <div className="city-image-fixed">
                <img src="/midia/bariloche.jpg" alt="Bariloche" />
            </div>

            {/* ✍️ Bloco de conteúdo que flutua e rola por cima */}
            <div className="city-container">

                <div className="city-text-wrapper">
                    <h3 className="country-tag">Argentina</h3>
                    <h4>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.booking.com/city/ar/san-carlos-de-bariloche.pt.html">
                            Bariloche - AR
                        </a>
                    </h4>

                    <div className="city-text">
                        <p>
                            Bariloche é um dos destinos mais famosos da Patagônia Argentina, conhecida por suas paisagens
                            de montanhas, lagos cristalinos e estações de esqui. A cidade atrai turistas durante o ano todo.
                        </p>

                        <p>
                            Entre as principais atrações estão o Cerro Catedral, o Lago Nahuel Huapi e o Circuito Chico,
                            que oferece vistas panorâmicas incríveis da região.
                        </p>

                        <p>
                            Além das paisagens naturais, Bariloche também é famosa por seus chocolates artesanais e sua
                            arquitetura inspirada em vilarejos alpinos.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}