import React from 'react';
import './Cidades.css';

export default function Florianopolis() {
    return (
        <section id="florianopolis" className="city-section">

            {/* 🖼️ Imagem fixa que fica por baixo de tudo */}
            <div className="city-image-fixed">
                <img src={`${import.meta.env.BASE_URL}midia/florianopolis.jpg`} alt="Florianópolis" />
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
                            Florianópolis, conhecida como a Ilha da Magia, é uma das capitais mais bonitas e completas do Brasil. 
                            Muito além de suas praias famosas como Jurerê, Ingleses e Canasvieiras, a cidade reúne natureza, 
                            cultura e história em um território diverso, com lagoas, manguezais, vilarejos e trilhas. 
                            Com 42 praias espalhadas pela ilha, cada região oferece experiências diferentes, 
                            desde surf e esportes até tranquilidade e contato com a natureza, o que torna a escolha da hospedagem 
                            essencial para o roteiro.
                        </p>
                        <p>
                            Entre os principais cartões-postais está a Ponte Hercílio Luz, símbolo da cidade e importante 
                            ligação entre a ilha e o continente. Após sua revitalização, passou a ser aberta ao tráfego 
                            leve e também se tornou um espaço para caminhadas e passeios, além de ser um dos pontos mais 
                            fotografados à noite. Próximo dali, o Mercado Público e o centro histórico oferecem uma imersão 
                            na cultura local, com gastronomia típica, artesanato e o famoso pastel de camarão, além de serem 
                            ótimos locais para conhecer o cotidiano da cidade.
                        </p>
                        <p>
                            O centro de Florianópolis também abriga a Praça XV de Novembro, famosa pela sua figueira centenária 
                            e por ser um ponto de encontro tradicional, e a Catedral Metropolitana, que possui importante acervo 
                            histórico e religioso. Ainda na região central, o Morro da Cruz oferece uma das melhores vistas 
                            panorâmicas da cidade, enquanto o Museu Histórico de Santa Catarina, no Palácio Cruz e Sousa, 
                            preserva a memória da colonização e da cultura local em um belo prédio histórico.
                        </p>
                        <p>
                            No litoral, destacam-se praias como Joaquina, famosa pelo surfe e pelas dunas onde é possível praticar sandboard, 
                            Campeche, ideal para esportes e com acesso à Ilha do Campeche, e Praia Mole, muito frequentada por surfistas e jovens. 
                            Já a Barra da Lagoa encanta pela tranquilidade, canais de água cristalina e ambiente ideal para mergulho e contato com a natureza. 
                            Essas praias mostram a diversidade do litoral da ilha, que atende tanto quem busca agito quanto quem procura sossego.
                        </p>
                        <p>
                            Outras regiões importantes incluem Santo Antônio de Lisboa, com forte influência açoriana e excelente gastronomia à beira-mar, 
                            e Jurerê Internacional, conhecida pelo luxo, infraestrutura moderna e vida noturna badalada. A Lagoa da Conceição também se 
                            destaca como um dos principais pontos turísticos, oferecendo esportes aquáticos, restaurantes e belas paisagens. 
                            No conjunto, Florianópolis combina natureza, história, cultura e lazer, sendo um destino completo para todos 
                            os perfis de viajantes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}