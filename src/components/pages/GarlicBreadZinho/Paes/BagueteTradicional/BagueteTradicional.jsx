import React from "react";
import Container from "./Styles";
import { Link } from "react-router-dom";
import PageBreadComponent from "../../componentPageBread/PageBreadComponent";
import PaoBagueteTradicional from "../../../../../Imgs/paes/pao-baguete-1.jpg";
import tableBagueteTradicional from "../../../../../Imgs/paes/tableBagueteTradicional.png";
import bannerBagueteTradicional from "../../../../../Imgs/paes/banner-baguete-tradicional.jpg";

import Picante from "../../../../../Imgs/paes/picante.png";
import Bolinha from "../../../../../Imgs/paes/bolinha.png";
import BolinhaPicante from "../../../../../Imgs/paes/bolinhaPicante.png";
import { useEffect } from "react";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";

const BagueteTradicional = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <Container>
      <PageBreadComponent
        title="Pão de Alho Baguete"
        breadName="Tradicional"
        breadDescription="Carro-chefe da marca, a Linha Pão de Alho é a preferida dos amantes do sabor tradicional, com paladar mais apurado. A linha é composta por Pão de Alho Tradicional e Picante, recheados com queijo e temperos naturais, nas suas versões Baguete e Bolinha."
        imgBread={PaoBagueteTradicional}
        ingredients="Farinha de trigo enriquecida com ferro e ácido fólico, água, margarina, queijo tipo muçarela, óleo de soja, alho, açúcar, sal, fermento biológico seco, melhorador de farinha, salsinha, realçador de sabor glutamato monossódico, conservante propinato de cálcio e cebolinha verde.
        "
        allergic="ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA."
        portion="Porção de 60g (1 unidade)"
        imgTable={tableBagueteTradicional}
        bannerPaoDeAlho={bannerBagueteTradicional}
      />
      <section className="container-fluid paddingTopBottom Flexcolumn">
        <p className="fs-3 textCenter title redColorZinho">
          CONHEÇA OS QUERIDINHOS
        </p>
        <div className="row">
          <div
            className="col-lg-4 container-paes"
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
            className="col-lg-4 container-paes"
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
          <div className="col-lg-4 container-paes">
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
    </Container>
  );
};

export default BagueteTradicional;
