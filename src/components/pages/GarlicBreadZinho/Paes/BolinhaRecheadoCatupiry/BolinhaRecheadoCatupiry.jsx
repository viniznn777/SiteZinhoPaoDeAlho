import React from "react";
import PageBreadComponent from "../../componentPageBread/PageBreadComponent";
import ContainerBolinhaRecheadoCatupiry from "./Styles";
import PaoCatupiry from "../../../../../Imgs/paes/pao-recheado-catupiry-1.jpg";
import tableBolinhaCatupiry from "../../../../../Imgs/paes/tableBolinhaCatupiry.png";
import bannerBolinhaCatupiry from "../../../../../Imgs/paes/banner-bolinha-catupiry.jpg";
import RecheadoLinguica from "../../../../../Imgs/paes/bolinhaLinguica.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";

const BolinhaRecheadoCatupiry = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ContainerBolinhaRecheadoCatupiry>
      <PageBreadComponent
        title="Pão Recheado com"
        breadName="CATUPIRY®
        "
        breadDescription="Com recheios saborosos, a Linha Pão Recheado é a pedida daqueles que gostam de um sabor diferenciado, muito além do comum. A linha é composta por Pão Recheado Com Catupiry® e Pão Recheado Com Linguiça e Queijo, na versão Bolinha.

        "
        imgBread={PaoCatupiry}
        ingredients="Farinha de trigo enriquecida com ferro e ácido fólico, água, requeijão Catupiry®, margarina, queijo tipo muçarela, sal, açúcar, realçador de sabor glutamato monossódico, fermento biológico seco, melhorador de farinha, conservante propionato de cálcio, antioxidante ácido ascórbico, regulador de acidez ácido cítrico, acidulante ácido láctico e conservante sorbato de potássio.
        "
        allergic="ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA."
        portion="Porção de 50g (2 unidades)"
        imgTable={tableBolinhaCatupiry}
        bannerPaoDeAlho={bannerBolinhaCatupiry}
      />
      <section className="container-fluid paddingTopBottom Flexcolumn">
        <p className="fs-3 textCenter title redColorZinho">
          CONHEÇA O OUTRO QUERIDINHO
        </p>
        <div className="row">
          <div
            className="col-lg-12 container-paes"
            id="container-img-paes-linguica"
          >
            <Link to="/pao-bolinha-recheado-linguica" draggable="false">
              <figure>
                <img
                  src={RecheadoLinguica}
                  alt="Pão de Alho Bolinha Linguiça"
                  draggable="false"
                />
                <figcaption className="textCenter">Saiba mais...</figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </section>
    </ContainerBolinhaRecheadoCatupiry>
  );
};

export default BolinhaRecheadoCatupiry;
