import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../utilities/Slider/Slider";
import ContainerHome from "./styles";

import colectionPaoDeAlhoZinho from "../../../Imgs/colectionPaoDeAlho.jpg";
import bannerPertoDeVoce from "../../../Imgs/banner-perto-de-voce.jpg";

const Home = () => {
  return (
    <ContainerHome>
      <Slider />
      <div className="container paddingTop ">
        <div className="row products">
          <div className="col-lg-6 center">
            <div className="containerImage">
              <img
                src={colectionPaoDeAlhoZinho}
                alt="Conheça nossa coleção de produtos"
                draggable="false"
                className="img-fluid"
              />
            </div>
            <p className="fs-4">
              Venha conhecer nossa variedade de produtos, todos de alta
              qualidade e muito saborosos. 😋
            </p>
            <Link to="/" draggable="false">
              <button>Produtos</button>
            </Link>
          </div>
          <div className="col-lg-6 center">
            <div className="containerImage">
              <img
                src={bannerPertoDeVoce}
                alt="Localize nossa fabrica perto de você"
                draggable="false"
                className="img-fluid"
              />
            </div>
            <p className="fs-4">
              Está com vontade de provar um pão de alho Zinho? Sempre tem Zinho
              perto de você. 📌
            </p>
            <Link to="/" draggable="false">
              <button>Localização</button>
            </Link>
          </div>
        </div>
      </div>
      <section className="container-fluid contate_nos">
        <div className="container center paddingTop">
          <p className="fs-1">Fale com a Zinho</p>
          <p className="fs-5">
            Entre em contato com a gente para atendermos as suas dúvidas,
            sugestões ou críticas.
          </p>
          <Link to="/contato" draggable="false">
            <button id="contact">Contate-nos</button>
          </Link>
        </div>
      </section>
    </ContainerHome>
  );
};

export default Home;
