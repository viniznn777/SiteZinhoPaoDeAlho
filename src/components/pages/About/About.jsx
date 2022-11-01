import React from "react";
import ContainerAbout from "./Styles";
import ZinhoOriginalImg from "../../../Imgs/zinho-original.jpg";
import IconMissao from "../../../Imgs/icon-missao.png";
import IconVisao from "../../../Imgs/icon-visao.png";
import IconValores from "../../../Imgs/icon-valores.png";
import Logo from "../../../Imgs/logo.png";
import { Link } from "react-router-dom";

const AboutZinho = () => {
  return (
    <ContainerAbout className="container-fluid ">
      <div className="container-fluid bg-zinho ">
        <div className="container paddingTopBottom">
          <p className="fs-1 title whiteColor">NÓS SOMOS A ZINHO</p>
          <p className="paragraphColorSize">
            Cada pedacinho da nossa história é recheado de muito trabalho e
            dedicação que nos fizeram a marca mais tradicional de Pão de Alho do
            Brasil.
          </p>
        </div>
      </div>
      <section className="container-fluid paddingTopBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="container">
                <p className="fs-2 title redColorZinho">O ORIGINAL</p>
                <p className="fs-5 ">
                  A Zinho é fruto de muita dedicação, esforço e, principalmente,
                  amor. Estes são os nossos ingredientes secretos, a chave do
                  nosso sucesso. Em 1998, antes mesmo de sermos "Zinho", criamos
                  a receita do melhor acompanhamento do churrasco. E foi em 2004
                  que fundamos a primeira fábrica exclusiva de Pão de Alho do
                  Brasil. Além disso, somos pioneiros na exportação do produto
                  no país. É por isso que somos Originais. De lá para cá, já se
                  passaram 16 anos. Foram muitas experiências, sabores,
                  inovações e transformações. Muito foi conquistado, mas muito
                  ainda está por vir. Nossa missão é entregar para você o melhor
                  produto com máxima qualidade e segurança. E é graças a esse
                  comprometimento que fomos certificados em uma norma de padrão
                  internacional, com 98,9% na auditoria de qualidade. Somos
                  Zinho. Somos Originais.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <img
                  src={ZinhoOriginalImg}
                  alt="Zinho Pão de Alho Original"
                  draggable="false"
                  title="Zinho Pão de Alho Original"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid paddingTopBottom bg-zinho-red border-radius-bottom-left">
        <div className="container center paddingTopBottom">
          <p className="fs-2 title whiteColor">
            Conheça um pouquinho da nossa história
          </p>
        </div>
        <div className="container ytb-thumb paddingTopBottom">
          <a
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <button>
              <svg height="70px" version="1.1" viewBox="0 0 68 48" width="70px">
                <path
                  className="ytp-large-play-button-bg"
                  d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                  fill="#f00"
                ></path>
                <path d="M 45,24 27,14 27,34" fill="#fff"></path>
              </svg>
            </button>
          </a>
        </div>
      </section>
      <section className="container-fluid paddingTopBottom reset">
        <div className="container center paddingTopBottom">
          <p className="fs-3 title">OS PILARES QUE NOS FORTALECEM</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 textCenter gapColumn">
              <div>
                <img
                  src={IconMissao}
                  alt="Ícone Missão"
                  draggable="false"
                  className="img-fluid"
                />
              </div>
              <div>
                <p className="fs-3 redColorZinho">MISSÃO:</p>
                <p className="fs-5">
                  Gerar valor à sociedade e a todos os envolvidos no negócio,
                  oferecendo qualidade, sabor e praticidade nos momentos felizes
                </p>
              </div>
            </div>
            <div className="col-lg-4 textCenter gapColumn">
              <div>
                <img
                  src={IconVisao}
                  alt="Ícone Visão"
                  draggable="false"
                  className="img-fluid"
                />
              </div>
              <div>
                <p className="fs-3 redColorZinho">VISÃO:</p>
                <p className="fs-5">
                  Manter-se sempre como referência em qualidade e
                  sustentabilidade, aliando tecnologia à segurança dos
                  alimentos.
                </p>
              </div>
            </div>
            <div className="col-lg-4 textCenter gapColumn">
              <div>
                <img
                  src={IconValores}
                  alt="Ícone Valores"
                  draggable="false"
                  className="img-fluid"
                />
              </div>
              <div>
                <p className="fs-3 redColorZinho">VALORES:</p>
                <p className="fs-5">
                  - O respeito às pessoas e à vida é inegociável; - Excelência
                  com Humildade; - Transparência e Honestidade são a alma do
                  negócio; - Inovação com desenvolvimento sustentável; - Atitude
                  de dono; - Garra para o alcance dos resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="container center gapColumn paddingTopBottom">
            <p className="fs-3 yellowColorZinho title">RECEITA ORIGINAL</p>
            <p className="fs-5 paragraphColorSize">
              Aqui terminam todas as diferenças, somos todos iguais!
            </p>

            <Link to="/">
              <button>CONHEÇA O CÓDIGO DE ÉTICA E CONDUTA DA ZINHO</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container-fluid reset">
        <div className="container-fluid bg-zinho  paddingTopBottom">
          <div className="container">
            <p className="fs-2 title whiteColor center">
              SOMOS ÚNICOS. SOMOS ORIGINAIS
            </p>
            <div className="slogan container-fluid flex">
              <div className="column">
                <p>Criamos a receita que deu origem ao Pão de Alho atual.</p>
                <p>
                  Desenvolvemos a 1ª Fábrica exclusiva de Pão de Alho no país.
                </p>
                <p>
                  Começamos um dos produtos mais amados e consumidos no Brasil.
                </p>
              </div>
              <img
                src={Logo}
                alt="Logo marca Zinho"
                draggable="false"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </ContainerAbout>
  );
};

export default AboutZinho;
