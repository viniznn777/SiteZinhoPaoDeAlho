import React from "react";
import ContainerExportation from "./Styles";
import MAINTENANCE from "../../../Imgs/maintenanceImage.jpg";

const Exportation = () => {
  return (
    <ContainerExportation>
      <div className="imageMaintenance textCenter ">
        <figure>
          <img
            src={MAINTENANCE}
            alt="maintenance "
            className="img-fluid"
            draggable="false"
          />

          <figcaption>
            <p className="fs-1 title redColorZinho textAnimate">
              Página em Construção
            </p>
          </figcaption>
        </figure>
      </div>
    </ContainerExportation>
  );
};

export default Exportation;
