import React from "react";
import PageBreadComponent from "../../componentPageBread/PageBreadComponent";
import { Link } from "react-router-dom";
import ContainerBolinhaRecheadoLinguica from "./Styles";
import PaoLinguicaQueijo from "../../../../../Imgs/paes/pao-recheado-linguica-1.jpg";
import tableBolinhaLinguicaQueijo from "../../../../../Imgs/paes/tableBolinhaLinguicaQueijo.png";
import bannerBolinhaLinguicaQueijo from "../../../../../Imgs/paes/banner-bolinha-linguica-queijo.jpg";
import RecheadoCatupiry from "../../../../../Imgs/paes/bolinhaRequeijao.png";

const BolinhaRecheadoLinguica = () => {
  return (
    <ContainerBolinhaRecheadoLinguica>
      <PageBreadComponent
        title="Pão Recheado com"
        breadName="CALABRESA E QUEIJO
        "
        breadDescription="Essa linguiça agora é calabresa! Apresentamos o nosso novo saborzinho Original de pão recheado: Bolinha Calabresa. Uma combinação incrível, que você, com certeza, vai querer provar!

        "
        imgBread={PaoLinguicaQueijo}
        ingredients="Farinha de trigo enriquecida com ferro e ácido fólico, água, linguiça tipo calabresa defumada, margarina, queijo tipo muçarela, sal, açúcar, alho, óleo vegetal de soja, condimento preparado sabor fumaça, fermento biológico seco, realçador de sabor glutamato monossódico, melhorador de farinha e conservantes propionato de cálcio e ácido sórbico.
        "
        allergic="ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA. PODE CONTER: CENTEIO, CEVADA, AVEIA TRITICALE E OVO."
        portion="Porção de 50g (2 unidades)"
        imgTable={tableBolinhaLinguicaQueijo}
        bannerPaoDeAlho={bannerBolinhaLinguicaQueijo}
        flavoring="CONTÉM AROMATIZANTE SINTÉTICO IDÊNTICO AO NATURAL."
      />
      <section className="container-fluid paddingTopBottom Flexcolumn">
        <p className="fs-3 textCenter title redColorZinho">
          CONHEÇA O OUTRO QUERIDINHO
        </p>
        <div className="row">
          <div
            className="col-lg-12  container-paes"
            id="container-img-paes-catupiry"
          >
            <Link to="/pao-bolinha-recheado-catupiry" draggable="false">
              <figure>
                <img
                  src={RecheadoCatupiry}
                  alt="Pão de Alho Bolinha Catupiry"
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
    </ContainerBolinhaRecheadoLinguica>
  );
};

export default BolinhaRecheadoLinguica;
