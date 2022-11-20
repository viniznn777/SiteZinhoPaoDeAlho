import React from "react";
import ComponentePreparo from "../../ComponentePreparo/ComponentePreparo";
import Frigideira1 from "../../../../../Imgs/preparo/Frigideira/frigideira1.png";
import Frigideira2 from "../../../../../Imgs/preparo/Frigideira/frigideira2.png";
import Frigideira3 from "../../../../../Imgs/preparo/Frigideira/frigideira3.png";
import Frigideira4 from "../../../../../Imgs/preparo/Frigideira/frigideira4.png";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";
import { useEffect } from "react";
const Frigideira = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ComponentePreparo
      img1={Frigideira1}
      img2={Frigideira2}
      img3={Frigideira3}
      img4={Frigideira4}
      item4={true}
      desc1=".AQUEÇA A FRIGIDEIRA ATÉ FICAR ESQUENTAR BEM."
      desc2=".COLOQUE OS PÃES, COM O CORTE PARA BAIXO, ATÉ AQUECER O RECHEIO."
      desc3=". EM SEGUIDA, ASSE OS DOIS LADOS ATÉ DOURAR."
      desc4=".SEU PÃO DE ALHO ESTÁ PRONTO!"
      srcIframe="https://www.youtube.com/embed/wu8AbnbLvrA"
      titleIframe="[#FaçaDoSeuJeito] Zinho Original - Modo de Preparo - FRIGIDEIRA"
      title="FRIGIDEIRA"
    />
  );
};

export default Frigideira;
