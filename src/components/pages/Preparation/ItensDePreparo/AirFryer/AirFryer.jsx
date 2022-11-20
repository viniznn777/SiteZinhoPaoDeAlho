import React from "react";
import ComponentePreparo from "../../ComponentePreparo/ComponentePreparo";
import AirFryer1 from "../../../../../Imgs/preparo/AirFryer/air-fryer1.png";
import AirFryer2 from "../../../../../Imgs/preparo/AirFryer/air-fryer2.png";
import AirFryer3 from "../../../../../Imgs/preparo/AirFryer/air-fryer3.png";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";
import { useEffect } from "react";
const AirFryer = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ComponentePreparo
      img1={AirFryer1}
      img2={AirFryer2}
      img3={AirFryer3}
      item4={false}
      desc1=".COLOQUE OS PÃES, COM O CORTE PARA BAIXO, NO RECEPIENTE."
      desc2=". AJUSTE PARA 3 MINUTOS E TEMPERATURA DE 200°C."
      desc3=".SEU PÃO DE ALHO ESTÁ PRONTO!"
      srcIframe="https://www.youtube.com/embed/3toysglC_yQ"
      titleIframe="[#FaçaDoSeuJeito] Zinho Original - Modo de Preparo - AIR FRYER"
      title="FORNO"
    />
  );
};

export default AirFryer;
