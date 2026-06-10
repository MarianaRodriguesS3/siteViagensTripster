import React from 'react';
import './Cidades.css';

export default function Fortaleza() {
    return (
        <section id="fortaleza" className="city-section">

            {/* 🖼️ Imagem fixa que fica por baixo de tudo */}
            <div className="city-image-fixed">
                <img src="/midia/fortaleza.jpg" alt="Fortaleza" />
            </div>

            {/* ✍️ Bloco de conteúdo que flutua e rola por cima */}
            <div className="city-container">

                {/* 🪄 Esta div controla o surgimento com efeito fade-in */}
                <div className="city-text-wrapper">
                    <h3 className="country-tag">Brasil</h3>
                    <h4>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.booking.com/city/br/fortaleza.pt.html">
                            Fortaleza - CE
                        </a>
                    </h4>
                    <div className="city-text">
                        <p>
                            Fortaleza é uma das cidades mais visitadas do Nordeste do Brasil, famosa por suas praias paradisíacas,
                            clima ensolarado e rica vida cultural. A cidade oferece opções de lazer, gastronomia e turismo histórico
                            para todos os perfis de visitantes.
                        </p>
                        <p>
                            Entre os principais pontos turísticos estão a Praia do Futuro, o Centro Dragão do Mar de Arte e Cultura
                            e a Praia de Iracema, famosa pelo calçadão e vida noturna vibrante. Fortaleza também é conhecida por
                            seu artesanato e feiras locais que encantam os turistas.
                        </p>
                        <p>
                            Para os amantes da natureza, há passeios para as dunas e lagoas próximas, além de esportes aquáticos
                            como kitesurf e windsurf. Com uma combinação de praias, cultura e gastronomia, Fortaleza continua sendo
                            um destino muito procurado no Nordeste brasileiro.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}