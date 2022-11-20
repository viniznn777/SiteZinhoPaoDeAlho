import React from "react";
import ContainerHomePreparation from "./Styles";
import ChurrasqueiraIcon from "../../../../Imgs/preparo/icon1.png";
import ChurrasqueiraEletrica from "../../../../Imgs/preparo/icon2.png";
import Frigideira from "../../../../Imgs/preparo/icon3.png";
import Grill from "../../../../Imgs/preparo/icon4.png";
import Forno from "../../../../Imgs/preparo/icon5.png";
import AirFryer from "../../../../Imgs/preparo/icon6.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ScrollToTop } from "../../../utilities/ScrollToTopFuction/ScrollToTopFunction";

const HomePreparation = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ContainerHomePreparation className="bg-zinho">
      <section className="container-fluid paddingTopBottom bg-zinho-red border-radius-bottom-right">
        <div className="container ">
          <p className="fs-2 title whiteColor">COMO CONSERVAR O SEU ZINHO</p>
          <p className="whiteColor paragraphColorSize2">
            Respeite os prazos de validade informados nas embalagens dos
            produtos. Os produtos devem ser armazenados em geladeiras com
            temperatura de 1 °C a 10 °C.
          </p>
        </div>
      </section>
      <section className="sectionButtons container-fluid paddingTopBottom border-radius-top-right">
        <div className="textCenter">
          <p className="fs-2 title redColorZinho">É FACINHO DE FAZER!</p>
          <p className="paragraphColorSize">
            Confira abaixo como preparar corretamente o seu Zinho e deixá-lo
            deliciosamente Crocante, Cremoso e Fofinho.
          </p>
        </div>
        <div className="container">
          <div className="row CenterItem">
            <div className="col-lg-2 CenterItem">
              <Link to="/churrasqueira" draggable="false">
                <img
                  src={ChurrasqueiraIcon}
                  alt="Churrasqueira"
                  className="img-fluid"
                  draggable="false"
                />
              </Link>
            </div>
            <div className="col-lg-2 CenterItem">
              <Link to="/churrasqueira_eletrica" draggable="false">
                <img
                  src={ChurrasqueiraEletrica}
                  alt="Churrasqueira Eletrica"
                  className="img-fluid"
                  draggable="false"
                />
              </Link>
            </div>
            <div className="col-lg-2 CenterItem">
              <Link to="/frigideira" draggable="false">
                <img
                  src={Frigideira}
                  alt="Frigideira"
                  className="img-fluid"
                  draggable="false"
                />
              </Link>
            </div>
            <div className="col-lg-2 CenterItem">
              <Link to="/grill" draggable="false">
                <img
                  src={Grill}
                  alt="Grill"
                  className="img-fluid"
                  draggable="false"
                />
              </Link>
            </div>
            <div className="col-lg-2 CenterItem">
              <Link to="/forno" draggable="false">
                <img
                  src={Forno}
                  alt="Forno"
                  className="img-fluid"
                  draggable="false"
                />
              </Link>
            </div>
            <div className="col-lg-2 CenterItem">
              <Link to="/air_fryer" draggable="false">
                <img
                  src={AirFryer}
                  alt="Air Fryer"
                  className="img-fluid"
                  draggable="false"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ContainerHomePreparation>
  );
};

export default HomePreparation;
