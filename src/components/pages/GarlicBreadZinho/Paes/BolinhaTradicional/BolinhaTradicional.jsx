import React from "react";
import ContainerBolinhaTradicional from "./Styles";
import { Link } from "react-router-dom";
import PageBreadComponent from "../../componentPageBread/PageBreadComponent";
import PaoBolinhaTradicional from "../../../../../Imgs/paes/pao-bolinha-1.jpg";
import tableBolinhaTradicional from "../../../../../Imgs/paes/tableBolinhaTradicional.png";
import BolinhaPicante from "../../../../../Imgs/paes/bolinhaPicante.png";
import bannerBolinhaTradicional from "../../../../../Imgs/paes/banner-bolinha-tradicional.jpg";
import BaguetePicante from "../../../../../Imgs/paes/picante.png";
import Tradicional from "../../../../../Imgs/paes/tradicional.png";
import { useEffect } from "react";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";

const BolinhaTradicional = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ContainerBolinhaTradicional>
      <PageBreadComponent
        title="Pão de Alho Bolinha"
        breadName="Tradicional"
        breadDescription="Carro-chefe da marca, a Linha Pão de Alho é a preferida dos amantes do sabor tradicional, com paladar mais apurado. A linha é composta por Pão de Alho Tradicional e Picante, recheados com queijo e temperos naturais, nas suas versões Baguete e Bolinha."
        imgBread={PaoBolinhaTradicional}
        ingredients="Farinha de trigo enriquecida com ferro e ácido fólico, água, margarina, queijo tipo muçarela, óleo de soja, alho, sal, açúcar, salsinha, fermento biológico seco, melhorador de farinha, realçador de sabor glutamato monossódico, cebolinha verde e conservante propionato de cálcio.
        "
        allergic="ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA."
        portion="Porção de 50g (2 unidades)"
        imgTable={tableBolinhaTradicional}
        bannerPaoDeAlho={bannerBolinhaTradicional}
      />
      <section className="container-fluid paddingTopBottom Flexcolumn">
        <p className="fs-3 textCenter title redColorZinho">
          CONHEÇA OS QUERIDINHOS
        </p>
        <div className="row">
          <div
            className="col-lg-4  container-paes"
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
            className="col-lg-4 container-paes"
            id="container-img-paes-baguete-picante"
          >
            <Link to="/pao-baguete-picante" draggable="false">
              <figure>
                <img
                  src={BaguetePicante}
                  alt="Pão de Alho Baguete Picante"
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
    </ContainerBolinhaTradicional>
  );
};

export default BolinhaTradicional;
