import React from 'react';
import './Cidades.css';

export default function BuenosAires() {
    return (
        <section id="aires" className="city-section">

            {/* 🖼️ Imagem fixa que fica por baixo de tudo */}
            <div className="city-image-fixed">
                <img src={`${import.meta.env.BASE_URL}midia/buenosAires.jpg`} alt="Buenos Aires" />
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
                            Buenos Aires é uma cidade vibrante e cheia de atrações para todos os gostos e bolsos, 
                            com opções que vão desde cultura, história e gastronomia até vida noturna e passeios 
                            ao ar livre. Entre os destaques está Puerto Madero, uma das áreas mais modernas da cidade, 
                            com restaurantes, bares e caminhadas à beira do rio, além de pontos turísticos como a 
                            Puente de la Mujer e antigos navios-museus, que mostram a transformação urbana da região.
                        </p>
                        <p>
                            No centro histórico, a Plaza de Mayo reúne alguns dos símbolos mais importantes da Argentina, 
                            como a Casa Rosada, a Catedral Metropolitana e o Banco Nación. A região também abriga cafés 
                            tradicionais como o histórico Café Tortoni, além do famoso Obelisco, localizado no cruzamento 
                            da Avenida Corrientes com a 9 de Julio, um dos pontos mais fotografados da cidade e cercado por teatros, 
                            bares e atrações culturais.
                        </p>

                        <p>
                            A cidade também é referência cultural, com atrações como o Teatro Colón, um dos mais importantes 
                            do mundo pela sua acústica e arquitetura, e a livraria El Ateneo Grand Splendid, instalada em um antigo teatro. 
                            Museus como o MALBA e o Museu de Arte Latino-Americana complementam a experiência cultural, 
                            reunindo obras de grandes artistas como Tarsila do Amaral, Frida Kahlo e outros nomes latino-americanos.
                        </p>
                        <p>
                            Bairros como San Telmo e La Boca mostram o lado mais tradicional e artístico da cidade. 
                            San Telmo é famoso por sua feira de antiguidades, ruas históricas e o Mercado de San Telmo, 
                            enquanto La Boca se destaca pelo Caminito, suas casas coloridas e o estádio La Bombonera. 
                            Já áreas verdes como os Bosques de Palermo, com o Rosedal, Jardim Botânico e Jardim Japonês, 
                            oferecem tranquilidade, natureza e paisagens perfeitas para caminhadas e passeios.
                        </p>
                        <p>
                            Outros destaques incluem o Centro Cultural Kirchner, o moderno centro cultural da cidade, 
                            o Parque de la Memoria, dedicado às vítimas da ditadura, e bairros como Villa Crespo e Caballito, 
                            conhecidos por compras e experiências locais. Buenos Aires também é referência mundial no tango, 
                            com diversos shows e casas tradicionais espalhadas pela cidade, 
                            tornando a experiência ainda mais completa e marcante.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}