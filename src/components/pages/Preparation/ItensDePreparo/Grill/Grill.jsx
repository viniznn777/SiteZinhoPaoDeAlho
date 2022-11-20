import React, { useEffect } from "react";
import ComponentePreparo from "../../ComponentePreparo/ComponentePreparo";
import Grill1 from "../../../../../Imgs/preparo/Grill/grill1.png";
import Grill2 from "../../../../../Imgs/preparo/Grill/grill2.png";
import Grill3 from "../../../../../Imgs/preparo/Grill/grill3.png";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";
const Grill = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ComponentePreparo
      img1={Grill1}
      img2={Grill2}
      img3={Grill3}
      desc1=".PRÉ-AQUEÇA A 200 °C.

    "
      desc2=".. ASSE O PÃO DE ALHO ATÉ DOURAR."
      desc3=". SEU PÃO DE ALHO ESTÁ PRONTO!"
      srcIframe="https://www.youtube.com/embed/lPEgbpkUqS0"
      titleIframe="[#FaçaDoSeuJeito​] Zinho Original - Modo de Preparo - GRILL"
      title="GRILL"
    />
  );
};

export default Grill;
