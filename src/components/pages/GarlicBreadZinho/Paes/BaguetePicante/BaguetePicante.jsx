import React from "react";
import { Link } from "react-router-dom";
import ContainerBaguetePicante from "./Styles";
import PageBreadComponent from "../../componentPageBread/PageBreadComponent";
import PaoBaguetePicante from "../../../../../Imgs/paes/pao-baguete-picante-1.jpg";
import tableBaguetePicante from "../../../../../Imgs/paes/tableBaguetePicante.png";
import bannerBaguetePicante from "../../../../../Imgs/paes/banner-baguete-picante.jpg";
import Tradicional from "../../../../../Imgs/paes/tradicional.png";
import Bolinha from "../../../../../Imgs/paes/bolinha.png";
import BolinhaPicante from "../../../../../Imgs/paes/bolinhaPicante.png";

const BaguetePicante = () => {
  return (
    <ContainerBaguetePicante>
      <PageBreadComponent
        title="Pão de Alho Baguete"
        breadName="Picante"
        breadDescription="Carro-chefe da marca, a Linha Pão de Alho é a preferida dos amantes do sabor tradicional, com paladar mais apurado. A linha é composta por Pão de Alho Tradicional e Picante, recheados com queijo e temperos naturais, nas suas versões Baguete e Bolinha."
        imgBread={PaoBaguetePicante}
        ingredients="Farinha de trigo enriquecida com ferro e ácido fólico, água, margarina, queijo tipo muçarela, alho, açúcar, sal, óleo de soja, pimenta dedo de moça, fermento biológico seco, melhorador de farinha, salsinha, realçador de sabor glutamato monossódico, conservante propionato de cálcio e cebolinha verde.
        "
        allergic="ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA."
        portion="Porção de 60g (1 unidade)"
        imgTable={tableBaguetePicante}
        bannerPaoDeAlho={bannerBaguetePicante}
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
    </ContainerBaguetePicante>
  );
};

export default BaguetePicante;
