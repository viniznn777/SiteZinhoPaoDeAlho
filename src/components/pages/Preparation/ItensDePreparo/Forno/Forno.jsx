import React from "react";
import ComponentePreparo from "../../ComponentePreparo/ComponentePreparo";
import Forno1 from "../../../../../Imgs/preparo/Forno/forno1.png";
import Forno2 from "../../../../../Imgs/preparo/Forno/forno2.png";
import Forno3 from "../../../../../Imgs/preparo/Forno/forno3.png";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";
import { useEffect } from "react";
const Forno = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ComponentePreparo
      img1={Forno1}
      img2={Forno2}
      img3={Forno3}
      item4={false}
      desc1=".PRÉ-AQUEÇA O FORNO A 180 °C."
      desc2=".ASSE O PÃO DE ALHO ATÉ DOURAR."
      desc3=".SEU PÃO DE ALHO ESTÁ PRONTO!"
      srcIframe="https://www.youtube.com/embed/rEykFfC4TKU"
      titleIframe="[#FaçaDoSeuJeito] Zinho Original - Modo de Preparo - FORNO"
      title="FORNO"
    />
  );
};

export default Forno;
