import React from 'react';
import './Cidades.css';

export default function BuenosAires() {
    return (
        <section id="aires" className="city-section">

            {/* 🖼️ Imagem fixa que fica por baixo de tudo */}
            <div className="city-image-fixed">
                <img src="/midia/buenosAires.jpg" alt="Buenos Aires" />
            </div>

            {/* ✍️ Bloco de conteúdo que flutua e rola por cima */}
            <div className="city-container">

                <div className="city-text-wrapper">
                    <h3 className="country-tag">Argentina</h3>
                    <h4>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.booking.com/city/ar/buenos-aires.pt.html">
                            Buenos Aires - AR
                        </a>
                    </h4>

                    <div className="city-text">
                        <p>
                            Buenos Aires é a capital da Argentina e um dos destinos mais visitados da América do Sul.
                            A cidade combina arquitetura europeia, cultura vibrante e uma forte tradição gastronômica,
                            sendo famosa pelo tango e pelos cafés históricos.
                        </p>

                        <p>
                            Entre os principais pontos turísticos estão a Casa Rosada, o bairro La Boca, a Calle Caminito
                            e o elegante bairro de Palermo, conhecido por seus parques, bares e vida noturna.
                        </p>

                        <p>
                            A cidade também oferece museus, centros culturais e uma vida urbana intensa, sendo ideal para
                            quem busca cultura, história e experiências gastronômicas únicas.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}