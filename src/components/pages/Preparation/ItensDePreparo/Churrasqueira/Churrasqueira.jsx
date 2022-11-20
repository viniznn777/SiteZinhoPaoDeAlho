import React from "react";
import ComponentePreparo from "../../ComponentePreparo/ComponentePreparo";
import Churrasqueira1 from "../../../../../Imgs/preparo/Churrasqueira/churrasqueira1.png";
import Churrasqueira2 from "../../../../../Imgs/preparo/Churrasqueira/churrasqueira2.png";
import Churrasqueira3 from "../../../../../Imgs/preparo/Churrasqueira/churrasqueira3.png";
import Churrasqueira4 from "../../../../../Imgs/preparo/Churrasqueira/churrasqueira4.png";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";
import { useEffect } from "react";
const Churrasqueira = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ComponentePreparo
      img1={Churrasqueira1}
      img2={Churrasqueira2}
      img3={Churrasqueira3}
      img4={Churrasqueira4}
      item4={true}
      desc1=".ACENDA A CHURRASQUEIRA E DEIXE A BRASA FICAR BEM QUENTE."
      desc2=".COLOQUE OS PÃES NA GRELHA, COM O CORTE PARA BAIXO, ATÉ AQUECER O RECHEIO."
      desc3=".EM SEGUIDA, ASSE OS DOIS LADOS ATÉ DOURAR."
      desc4=".SEU PÃO DE ALHO ESTÁ PRONTO!"
      srcIframe="https://www.youtube.com/embed/fonjgMptHsU"
      titleIframe="[#FaçaDoSeuJeito] Zinho Original - Modo de Preparo - CHURRASQUEIRA"
      title="CHURRASQUEIRA"
    />
  );
};

export default Churrasqueira;
