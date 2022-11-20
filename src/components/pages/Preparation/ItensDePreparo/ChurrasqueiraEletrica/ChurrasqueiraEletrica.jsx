import React from "react";
import ComponentePreparo from "../../ComponentePreparo/ComponentePreparo";
import ChurrasqueiraEletrica1 from "../../../../../Imgs/preparo/ChurrasqueiraEletrica/churrasqueira-eletrica1.png";
import ChurrasqueiraEletrica2 from "../../../../../Imgs/preparo/ChurrasqueiraEletrica/churrasqueira-eletrica2.png";
import ChurrasqueiraEletrica3 from "../../../../../Imgs/preparo/ChurrasqueiraEletrica/churrasqueira-eletrica3.png";
import ChurrasqueiraEletrica4 from "../../../../../Imgs/preparo/ChurrasqueiraEletrica/churrasqueira-eletrica4.png";
import { ScrollToTop } from "../../../../utilities/ScrollToTopFuction/ScrollToTopFunction";
import { useEffect } from "react";

const ChurrasqueiraEletrica = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ComponentePreparo
      img1={ChurrasqueiraEletrica1}
      img2={ChurrasqueiraEletrica2}
      img3={ChurrasqueiraEletrica3}
      img4={ChurrasqueiraEletrica4}
      item4={true}
      desc1=".ACENDA A CHURRASQUEIRA ELÉTRICA E DEIXE ESQUENTAR BEM."
      desc2=".COLOQUE OS PÃES NA GRELHA, COM O CORTE PARA BAIXO, ATÉ AQUECER O RECHEIO."
      desc3=".EM SEGUIDA, ASSE OS DOIS LADOS ATÉ DOURAR."
      desc4=".SEU PÃO DE ALHO ESTÁ PRONTO!"
      title="CHURRASQUEIRA ELÉTRICA"
    />
  );
};

export default ChurrasqueiraEletrica;
