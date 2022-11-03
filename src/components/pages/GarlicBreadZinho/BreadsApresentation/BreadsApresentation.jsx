import React from "react";
import ContainerBreadsApresentation from "./Styles";
import Bread from "../../../../Imgs/img-categoria.jpg";
import Collection from "../../../../Imgs/slider/img1.jpg";

// Paes IMGs //
import Tradicional from "../../../../Imgs/paes/tradicional.png";
import Picante from "../../../../Imgs/paes/picante.png";
import Bolinha from "../../../../Imgs/paes/bolinha.png";
import BolinhaPicante from "../../../../Imgs/paes/bolinhaPicante.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ScrollToTop } from "../../../utilities/ScrollToTopFuction/ScrollToTopFunction";
// ======== //

const BreadsApresentation = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ContainerBreadsApresentation>
      <section className="container-fluid bg-zinho paddingTopBottom">
        <div className="container">
          <div>
            <p className="fs-1 title whiteColor textCenter">
              ÓTIMA PEDIDA PARA CHURRASQUEAR
            </p>
          </div>
          <figure className="container-img textCenter">
            <img
              src={Bread}
              alt=""
              className="img-fluid"
              draggable="false"
              title="Pão de Alho ZINHO"
            />
            <figcaption className="fs-5 paddingTopBottomSmall">
              <p>
                Nos churrascos entre amigos e familiares sempre se ouviu falar
                dele: o Pão de Alho. Por diversas vezes acompanhado de uma boa
                carne na brasa.
              </p>
              <p>
                Crocante, cremoso e fofinho, Pão de Alho Zinho é presença
                obrigatória em churrascos por todo o país, sendo uma verdadeira
                paixão nacional.
              </p>
              <p className="title">CROCANTE, CREMOSO E FOFINHO</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="container-fluid reset bg-zinho paddingTopBottom">
        <img
          src={Collection}
          alt="Pães de Alho ZINHO"
          className="img-fluid"
          draggable="false"
        />
      </section>
      <section className="container-fluid paddingTopBottom Flexcolumn">
        <p className="fs-3 textCenter title redColorZinho">
          CONHEÇA OS QUERIDINHOS
        </p>
        <div className="row">
          <div
            className="col-lg-3  container-paes"
            id="container-img-paes-tradicional"
          >
            <Link to="/pao-baguete-tradicional" draggable="false">
              <figure>
                <img
                  src={Tradicional}
                  alt="Pão de Alho Baguete Tradicional"
                  draggable="false"
                />
                <figcaption className="textCenter">
                  <p>Saiba mais...</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div
            className="col-lg-3 container-paes"
            id="container-img-paes-baguete-picante"
          >
            <Link to="/pao-baguete-picante" draggable="false">
              <figure>
                <img
                  src={Picante}
                  alt="Pão de Alho Baguete Picante"
                  draggable="false"
                />
                <figcaption className="textCenter">Saiba mais...</figcaption>
              </figure>
            </Link>
          </div>
          <div
            className="col-lg-3 container-paes"
            id="container-img-paes-bolinha"
          >
            <Link to="/pao-bolinha-tradicional" draggable="false">
              <figure>
                <img
                  src={Bolinha}
                  alt="Pão de Alho Bolinha Tradicional"
                  draggable="false"
                />
                <figcaption className="textCenter">
                  <p>Saiba mais...</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div className="col-lg-3 container-paes">
            <Link
              to="/pao-bolinha-picante"
              id="container-img-paes-bolinha-picante"
              draggable="false"
            >
              <figure>
                <img
                  src={BolinhaPicante}
                  alt="Pão de Alho Bolinha Picante"
                  draggable="false"
                />
                <figcaption className="textCenter">
                  <p>Saiba mais...</p>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </section>
    </ContainerBreadsApresentation>
  );
};

export default BreadsApresentation;
