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
                            Bariloche, na Argentina, é muito mais do que neve e estações de esqui. Porta de entrada da Patagônia, 
                            a cidade combina paisagens impressionantes com lagos, montanhas, florestas e uma boa infraestrutura turística. 
                            O destino muda bastante conforme a estação: no inverno, o destaque é o esqui no Cerro Catedral, 
                            enquanto no verão e nas demais estações os lagos, trilhas e mirantes ganham protagonismo, 
                            especialmente o famoso Lago Nahuel Huapi.
                        </p>
                        <p>
                            O Cerro Catedral é a principal estação de esqui da região e uma das maiores da América do Sul, 
                            com mais de 100 km de pistas. No inverno, atrai esquiadores de todos os níveis, 
                            enquanto no resto do ano recebe visitantes interessados em trilhas e paisagens panorâmicas. 
                            Já o Cerro Otto oferece uma experiência mais tranquila e familiar, com teleférico, 
                            vistas incríveis e atividades na neve como o esquibunda durante o inverno.
                        </p>
                        <p>
                            O Centro Cívico de Bariloche, às margens do Lago Nahuel Huapi, é um dos cartões-postais da cidade, 
                            com arquitetura inspirada nos Alpes e o Museu da Patagônia. 
                            A região central também concentra lojas de chocolate artesanal, 
                            uma das marcas registradas do destino, com fábricas famosas como Mamuschka e Rapa Nui. 
                            Outro destaque é a Catedral Nossa Senhora do Nahuel Huapi, de estilo neogótico, 
                            que se tornou um dos pontos mais fotografados da cidade.
                        </p>
                        <p>
                            O Lago Nahuel Huapi é o grande protagonista natural da região, 
                            cercado por montanhas e florestas e conhecido por suas águas cristalinas e paisagens únicas. 
                            No verão, suas margens se transformam em praias e áreas de lazer, 
                            ideais para relaxar ou fazer passeios de barco. Outro passeio muito popular é o Circuito Chico, 
                            que percorre os principais cenários naturais da região, incluindo mirantes, 
                            lagos e até a charmosa Villa La Angostura.
                        </p>
                        <p>
                            Para quem busca experiências mais completas, há ainda o Cruce Andino, 
                            uma travessia entre Argentina e Chile passando por lagos e montanhas até Puerto Varas, 
                            considerada uma das rotas mais bonitas da Patagônia. 
                            Bariloche se destaca justamente por essa diversidade, oferecendo neve, natureza, 
                            gastronomia e aventura em qualquer época do ano, sendo um dos destinos mais versáteis 
                            da América do Sul.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}