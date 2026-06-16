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
                            Fortaleza é um dos destinos mais completos do Brasil para quem busca praias, cultura e lazer. 
                            A cidade combina belas paisagens litorâneas, clima tropical, gastronomia típica e uma vida urbana animada, 
                            marcada pelo forró e pelo alto astral. Suas praias urbanas mais conhecidas, como Meireles, Mucuripe e Iracema, 
                            são bastante visitadas, embora muitas vezes não sejam ideais para banho, sendo mais indicadas para caminhadas, 
                            esportes e para apreciar o pôr do sol.
                        </p>
                        <p>
                            A Avenida Beira Mar é um dos principais cartões-postais da cidade, reunindo movimento, turismo e lazer em um só lugar. 
                            Seu calçadão é muito frequentado por moradores e visitantes para caminhadas, corridas e passeios ao fim da tarde, 
                            além da famosa feirinha de artesanato que atrai turistas diariamente. A região também conta com hotéis, 
                            restaurantes e bares, sendo uma das áreas mais valorizadas de Fortaleza e um ótimo ponto de partida para explorar a cidade.
                        </p>
                        <p>
                            Na Praia de Iracema, um dos bairros mais tradicionais, estão algumas das atrações mais icônicas da cidade. 
                            A Ponte dos Ingleses é um dos melhores lugares para apreciar o pôr do sol, enquanto o Dragão do Mar se destaca como um importante centro cultural, 
                            reunindo museus, teatro, planetário e espaços de arte. À noite, a região ganha vida com bares e eventos culturais, 
                            sendo um dos pontos mais movimentados da cidade.
                        </p>
                        <p>
                            O centro de Fortaleza revela um lado mais histórico e cultural, com atrações como o Mercado Central, 
                            famoso pelo artesanato e produtos típicos nordestinos, e o Emcetur, que funciona em um prédio histórico 
                            e abriga diversas lojas. Também se destacam a Catedral Metropolitana, o Passeio Público e o Museu do Ceará, 
                            que ajudam a contar a história e a cultura do estado. Esses locais tornam o centro um ponto essencial 
                            para quem deseja conhecer a identidade da cidade.
                        </p>

                        <p>
                            No geral, Fortaleza oferece uma experiência completa que une praias, cultura, história, 
                            gastronomia e lazer em um único destino. É uma cidade que agrada tanto quem busca relaxar à beira-mar 
                            quanto quem prefere explorar centros culturais, mercados e a vida urbana vibrante, tornando a viagem 
                            variada e memorável.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}