import React from 'react';
import './Rio.css';

export default function RioDeJaneiro() {
    return (
        <section id="rio" className="city-section">

            {/* 🖼️ Imagem fixa que fica por baixo de tudo (vazando até por trás do Header) */}
            <div className="city-image-fixed">
                <img src="/midia/rio.jpg" alt="Rio de Janeiro" />
            </div>

            {/* ✍️ Bloco de conteúdo que flutua e rola por cima */}
            <div className="city-container">

                {/* 🪄 Esta div controla o surgimento com efeito fade-in de 3 segundos */}
                <div className="city-text-wrapper">
                    <h3 className="country-tag">Brasil</h3>
                    <h4>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.booking.com/city/br/rio-de-janeiro.pt.html">
                            Rio de Janeiro - RJ
                        </a>
                    </h4>
                    <div className="city-text">
                        <p>
                            O Rio de Janeiro é um dos destinos turísticos mais procurados do Brasil, atraindo visitantes durante todo o ano
                            por suas paisagens naturais, praias famosas e atrações históricas. A cidade oferece opções para todos os estilos
                            de viajantes, combinando lazer, cultura, aventura e contato com a natureza em um único lugar.
                        </p>
                        <p>
                            Entre os principais cartões-postais estão o Cristo Redentor, localizado no alto do Morro do Corcovado, e o
                            Bondinho do Pão de Açúcar, que proporciona vistas panorâmicas inesquecíveis da cidade. Próximo ao Cristo,
                            o Parque Lage é uma excelente opção para quem deseja aproveitar áreas verdes, trilhas e um ambiente histórico
                            cercado pela Mata Atlântica.
                        </p>
                        <p>
                            Para os interessados em cultura e história, a Escadaria Selarón, os Arcos da Lapa e o Parque das Ruínas estão
                            entre os locais mais visitados. Essas atrações representam diferentes momentos da identidade carioca e oferecem
                            espaços ideais para passeios, fotografias e contato com a arte e a arquitetura da cidade.
                        </p>
                        <p>
                            Os amantes de esportes e natureza encontram diversas opções no Rio de Janeiro. O Estádio do Maracanã é parada
                            obrigatória para os fãs de futebol, enquanto a Pedra da Gávea, o Morro Dois Irmãos e o Mirante Dona Marta
                            proporcionam trilhas e vistas privilegiadas. Já o Jardim Botânico e a Lagoa Rodrigo de Freitas oferecem ambientes
                            mais tranquilos para caminhadas, passeios ao ar livre e momentos de descanso.
                        </p>
                        <p>
                            As praias também são um dos grandes destaques da cidade. Copacabana, Ipanema, Leblon, Arpoador e Barra da Tijuca
                            estão entre as mais conhecidas, atraindo turistas em busca de lazer, esportes e belas paisagens. Com uma combinação
                            única de natureza, cultura e entretenimento, o Rio de Janeiro continua sendo um dos destinos mais desejados do país
                            para quem busca experiências inesquecíveis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}