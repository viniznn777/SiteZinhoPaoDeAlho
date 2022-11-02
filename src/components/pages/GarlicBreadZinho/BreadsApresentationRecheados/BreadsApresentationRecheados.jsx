import React from "react";
import ContainerBreadsApresentationRecheados from "./Styles";
import Bread from "../../../../Imgs/paes/pao-recheado.jpg";
import Collection from "../../../../Imgs/paes/collection-recheado.jpg";

// Paes IMGs //
import RecheadoCatupiry from "../../../../Imgs/paes/bolinhaRequeijao.png";
import RecheadoLinguica from "../../../../Imgs/paes/bolinhaLinguica.png";
import { Link } from "react-router-dom";
// ======== //

const BreadsApresentationRecheados = () => {
  return (
    <ContainerBreadsApresentationRecheados>
      <section className="container-fluid bg-zinho paddingTopBottom">
        <div className="container">
          <div>
            <p className="fs-1 title whiteColor textCenter">
              TODO MUNDO CHAMA POR ELE
            </p>
          </div>
          <figure className="container-img textCenter">
            <img
              src={Bread}
              alt=""
              className="img-fluid"
              draggable="false"
              title="Pão de Alho Rechado ZINHO"
            />
            <figcaption className="fs-5 paddingTopBottomSmall">
              <p>
                Reunir a turma para curtir a amizade juntos é bom demais. É um
                momento cheio de alegria com gostinho de quero mais.
              </p>
              <p>
                O Pão Recheado foi criado especialmente para aqueles que não
                dispensam uma boa conversa acompanhada de um delicioso sabor da
                Zinho.
              </p>
              <p>
                Com ingredientes diferenciados, o Pão Recheado Zinho celebra o
                encontro da galera do Brasil.
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
            className="col-lg-6  container-paes"
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
          <div
            className="col-lg-6 container-paes"
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
    </ContainerBreadsApresentationRecheados>
  );
};

export default BreadsApresentationRecheados;
