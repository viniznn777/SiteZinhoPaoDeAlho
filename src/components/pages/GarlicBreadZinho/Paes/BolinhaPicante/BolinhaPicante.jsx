import React from "react";
import { Link } from "react-router-dom";
import ContainerBolinhaPicante from "./Styles";
import PageBreadComponent from "../../componentPageBread/PageBreadComponent";
import PaoBolinhaPicante from "../../../../../Imgs/paes/pao-bolinha-picante-1.jpg";
import tableBolinhaPicante from "../../../../../Imgs/paes/tableBolinhaPicante.png";
import bannerBolinhaPicante from "../../../../../Imgs/paes/banner-bolinha-picante.jpg";
import Picante from "../../../../../Imgs/paes/picante.png";
import Bolinha from "../../../../../Imgs/paes/bolinha.png";
import Tradicional from "../../../../../Imgs/paes/tradicional.png";

const BolinhaPicante = () => {
  return (
    <ContainerBolinhaPicante>
      <PageBreadComponent
        title="Pão de Alho Bolinha"
        breadName="Picante"
        breadDescription="Carro-chefe da marca, a Linha Pão de Alho é a preferida dos amantes do sabor tradicional, com paladar mais apurado. A linha é composta por Pão de Alho Tradicional e Picante, recheados com queijo e temperos naturais, nas suas versões Baguete e Bolinha."
        imgBread={PaoBolinhaPicante}
        ingredients="Farinha de trigo enriquecida com ferro e ácido fólico, água, margarina, queijo tipo muçarela, alho, açúcar, sal, óleo de soja, pimenta dedo de moça, fermento biológico seco, melhorador de farinha, salsinha, realçador de sabor glutamato monossódico, conservante propionato de cálcio e cebolinha verde.
        "
        allergic="ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA."
        portion="Porção de 50g (2 unidades)"
        imgTable={tableBolinhaPicante}
        bannerPaoDeAlho={bannerBolinhaPicante}
      />
      <section className="container-fluid paddingTopBottom Flexcolumn">
        <p className="fs-3 textCenter title redColorZinho">
          CONHEÇA OS QUERIDINHOS
        </p>
        <div className="row">
          <div className="col-lg-4 container-paes">
            <Link
              to="/pao-baguete-tradicional"
              id="container-img-paes-tradicional"
              draggable="false"
            >
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
            id="container-img-paes-bolinha-tradicional"
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
        </div>
      </section>
    </ContainerBolinhaPicante>
  );
};

export default BolinhaPicante;
