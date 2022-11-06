import React, { useEffect } from "react";
import PageBreadComponent from "../../componentPageBread/PageBreadComponent";
import ContainerPackBolinha from "./Styles";
import PackBolinhaImg from "../../../../../Imgs/paes/pack-bolinha-1.jpg";
import tablePackBolinha from "../../../../../Imgs/paes/tablePackBolinha.png";
import bannerPackBolinha from "../../../../../Imgs/paes/banner-pack-bolinha.jpg";
import { Link } from "react-router-dom";
import Tradicional from "../../../../../Imgs/paes/tradicional.png";
import BaguetePicante from "../../../../../Imgs/paes/picante.png";
import BolinhaPicante from "../../../../../Imgs/paes/bolinhaPicante.png";
import BolinhaTradicional from "../../../../../Imgs/paes/bolinha.png";
import BolinhaRecheadoCatupiry from "../../../../../Imgs/paes/bolinhaRequeijao.png";
import BolinhaLinguica from "../../../../../Imgs/paes/bolinhaLinguica.png";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";

const PackBolinha = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ContainerPackBolinha>
      <PageBreadComponent
        title="PACK PÃO DE ALHO BOLINHA"
        breadName="Tradicional"
        breadDescription="O que era bom, ficou ainda melhor! Agora você tem um pacotão de pãoZinho para celebrar os melhores momentos, seja em família ou amigos. Assim fica fácil dividir, né?!"
        imgBread={PackBolinhaImg}
        ingredients="Farinha de trigo enriquecida com ferro e ácido fólico, água, margarina, queijo tipo muçarela, óleo de soja, alho, sal, açúcar, salsinha, fermento biológico seco, melhorador de farinha, realçador de sabor glutamato monossódico, cebolinha verde e conservante propionato de cálcio.
        "
        allergic="ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA."
        portion="Porção de 50g (2 unidades)"
        imgTable={tablePackBolinha}
        bannerPaoDeAlho={bannerPackBolinha}
      />
      <section className="container-fluid paddingTopBottom Flexcolumn">
        <p className="fs-3 textCenter title redColorZinho">
          CONHEÇA OS OUTROS QUERIDINHOS
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
          <div className="col-lg-3 container-paes">
            <Link
              to="/pao-bolinha-tradicional"
              id="container-img-paes-bolinha-tradicional"
              draggable="false"
            >
              <figure>
                <img
                  src={BolinhaTradicional}
                  alt="Pão de Alho Bolinha Picante"
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
              to="/pao-bolinha-recheado-catupiry"
              id="container-img-paes-catupiry"
              draggable="false"
            >
              <figure>
                <img
                  src={BolinhaRecheadoCatupiry}
                  alt="Pão de Alho Bolinha Picante"
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
              to="/pao-bolinha-recheado-linguica"
              id="container-img-paes-bolinha-picante"
              draggable="false"
            >
              <figure>
                <img
                  src={BolinhaLinguica}
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
    </ContainerPackBolinha>
  );
};

export default PackBolinha;
