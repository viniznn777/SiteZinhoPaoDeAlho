import React from "react";
import ContainerWhereToFind from "./Styles";

const WhereToFind = () => {
  return (
    <ContainerWhereToFind className="container-fluid ">
      <section className="container-fluid  bg-zinho-red border-radius-bottom-right">
        <div className="container paddingTopBottom">
          <p className="fs-2 title whiteColor">
            Onde encontrar Produtos Zinho ?
          </p>
          <p className="fs-5 paragraphColorSize whiteColor">
            Veja quais são os comércios que vende os produtos ZINHO pertinho de
            você!
          </p>
          <iframe
            src="https://munddi.com/ZINHO?e=1&logo=1"
            frameborder="0"
            allow="geolocation *;"
            width="100%"
            height="500px"
            title="Onde encontrar Produtos Zinho"
          ></iframe>
        </div>
      </section>
    </ContainerWhereToFind>
  );
};

export default WhereToFind;
