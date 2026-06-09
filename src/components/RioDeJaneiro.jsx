import React from 'react';
import './RiodeJaneiro.css';

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
                        <p>O Rio de Janeiro constantemente aparece entre os destinos mais
                            procurados pelos turistas para viajar em períodos de férias e em diversos feriados espalhados
                            pelo ano. Na cidade, o viajante encontra diversas atrações para curtir independente do tempo que
                            ficará por lá. Veja quais os pontos turísticos no Rio de Janeiro que não podem ficar de fora
                            do seu roteiro.
                        </p>
                        <p>O Cristo Redentor é um cartão postal do Rio de Janeiro, o Cristo
                            Redentor está localizado no alto do morro do Corcovado e
                            é uma das principais atrações da cidade. A escultura, que tem 30 metros
                            de altura, está situada no Parque Nacional da Tijuca e a mais de 700 metros do nível do mar. Lá
                            de cima, o turista consegue apreciar as belas paisagens da região.
                            Para chegar ao topo, a indicação é utilizar um passeio de trem, com duração de 20 minutos. Já
                            para facilitar o acesso dos visitantes, foram construídos três elevadores panorâmicos e quatro
                            escadas rolantes. Caso seja possível, prefira ir em dias das semana logo pela manhã para evitar
                            multidões.
                        </p>
                        <p>Quem for ao Rio de Janeiro não pode deixar de visitar o Parque Lage,
                            conhecido como “sovaco do Cristo”, por estar localizado à direita do braço direito da estátua.
                            Por lá, é possível curtir e aproveitar os 52 hectares de floresta, além de programas culturais.
                            No local, há algumas trilhas, sendo que uma delas leva até o Morro do Corcovado.
                            O trajeto, que tem duração aproximada de duas horas e meia, não é dos mais fáceis. Para
                            isso, recomenda-se ter a companhia de um guia experiente durante o caminho até a entrada do
                            Cristo Redentor. Durante a caminhada, aproveite para apreciar a natureza e ter contato com os elementos
                            que a compõem.
                        </p>
                        <p>Outro lugar que você não pode deixar de visitar é a Escadaria
                            Selarón, o artista plástico chileno Jorge Selarón levou mais de 20 anos para
                            decorar com ladrilhos a escadaria, com mais de 250 degraus, da Rua Joaquim Silva, que se tornou
                            um dos cartões postais da cidade. Impressionante, a obra é ideal para tirar fotos belíssimas. O
                            local ganhou tanto destaque que já apareceu em vídeos promocionais e em clipes de famosos, como
                            Snoop Dogg.
                        </p>
                        <p>O Parque das Ruínas está localizado nas ladeiras do bairro de Santa
                            Teresa e permite que o turista aprecie as vistas do centro e da Baía de Guanabara. O local é
                            indicado para todos os públicos e, por lá, há um Centro Cultural com diversas atividades,
                            exposições e apresentações gratuitas. Aproveite para conhecer o Museu Chácara do Céu, que fica
                            próximo do parque.
                        </p>
                        <p>O Bondinho do Pão de Açúcar foi o primeiro teleférico do Brasil,
                            inaugurado em 1912. Para chegar ao local, que fica a 396 metros do nível do mar, é necessário
                            pegar um primeiro bonde na Praia Vermelha, que segue até o morro da Urca. De lá, outro bondinho vai
                            até o destino final. A atração é uma das mais populares do Rio de Janeiro e oferece várias
                            paisagens deslumbrantes.
                        </p>
                        <p>O Estádio do Maracanã, inaugurado em junho de 1950, é uma parada
                            obrigatória para os fãs de futebol, local de diversos clássicos. Por lá, é possível fazer um
                            tour pelos bastidores mediante pagamento. Durante a visitação, que tem duração média de 40 minutos,
                            os turistas conhecem peças marcantes do futebol brasileiro. Ainda visitam o vestiário, as salas
                            de aquecimento e outros pontos.
                        </p>
                        <p>A Pedra da Gávea, com 844 metros de altura, está localizada no
                            Parque Nacional da Tijuca. Para subí-la, o visitor enfrenta um percurso de, no mínimo, três horas.
                            Não é fácil, por isso requer alguns cuidados, como condicionamento físico e um guia com experiência. O
                            esforço, no entanto, vale a pena: a vista, lá de cima, garantem que é fantástica.</p>
                        <p>Você sabia que o Jardim Botânico do Rio de Janeiro é considerado um
                            dos mais importantes do mundo? Criado em 1808 por D. João VI, o local é uma das atrações turísticas
                            mais importantes da cidade. No espaço, é possível encontrar mais de 40 mil plantas de 6,5 mil
                            espécies diferentes. Raras coleções de bromélias e orquídeas estão presentes por lá. O visitante também
                            pode observar pássaros e apreciar um patrimônio histórico.
                        </p>
                        <p>Que tal aproveitar o dia para caminhar ou andar de bicicleta no
                            entorno da Lagoa Rodrigo de Freitas, que tem 8 km de extensão. Pelos arredores, o turista
                            consegue realizar a prática de esportes e fazer piqueniques com os amigos e familiares. É possível,
                            ainda, utilizar o espaço para relaxar e descansar.
                        </p>
                        <p>Em uma região boêmia, os Arcos da Lapa configuram-se como mais um
                            cartão postal do turismo no Rio de Janeiro . A estrutura é feita de pedra argamassada e tem um
                            estilo mais romântico. O bairro é bastante visitado por turistas em todos os períodos do dia. Ao
                            redor da atração, é possível visitar o Circo Voador e a Fundição Progresso.
                        </p>
                        <p>O Mirante Dona Marta também está entre os pontos obrigatórios e é
                            um dos mais visitados da cidade. O lugar tem 360 metros de altura. Para chegar lá, é possível ir
                            de carro ou a pé, através de uma trilha que pode demorar de 30 minutos a quase uma hora. No topo,
                            os turistas conseguem avistar a Baía de Guanabara, o Cristo Redentor e outras atrações.
                        </p>
                        <p>O Morro dois Irmãos integra a lista de pontos turísticos no Rio de
                            Janeiro. Quem preferir, pode fazer uma trilha para apreciá-lo de perto. Para isso, é necessário
                            passar por um trajeto que tem início na comunidade do Vidigal, em um caminho de 1,5 km,
                            com duração de 40 minutos. Ao chegar na parte mais alta, é possível avistar todas as paisagens
                            da Zona Sul.
                        </p>
                        <p>Mergulhos e pé na areia não vão faltar durante sua viagem ao Rio. A
                            orla da cidade tem 86 km com opções de praias para todos os gostos e estilos. Quem busca
                            tranquilidade pode ir à praia do Leme. Já quem gosta de agitação, a praia de Copacabana, famosa
                            ainda pelo calçadão que simula as ondas do mar, é o destino ideal.
                            Na Zona Sul, vale conhecer Ipanema e Leblon. Arpoador também não deve ficar de fora. A praia da
                            Barra da Tijuca, por sua vez, é a dica para os amantes de esportes. Por lá, a Abricó é a única
                            dedicada ao naturismo. Outras opções são mais reservadas e de difícil acesso, sendo acessadas
                            apenas por embarcações ou trilhas, como a praia do Perigoso e a praia Funda.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}