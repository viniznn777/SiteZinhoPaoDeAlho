import React from "react";
import ContainerPageBread from "./Styles";
import { Link } from "react-router-dom";

const PageBreadComponent = ({
  title,
  breadName,
  breadDescription,
  imgBread,
  ingredients,
  flavoring,
  allergic,
  portion,
  imgTable,
  bannerPaoDeAlho,
}) => {
  return (
    <ContainerPageBread>
      <section className="container-fluid bg-zinho paddingTopBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title">
                <p className="fs-1 whiteColor">{title}</p>
              </div>
              <div className="breadName title">
                <p className="fs-2 whiteColor">{breadName}</p>
                <p className="fs-5 paragraphColorSize">{breadDescription}</p>
              </div>
            </div>
            <div className="col-lg-6 containerImgBread">
              <img
                src={imgBread}
                alt={`Pão de Alho ${breadName}`}
                className="img-fluid"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-zinho paddingTopBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title">
                <p className="fs-3 whiteColor">Ingredientes</p>
              </div>
              <div className="containerIngredientes">
                <p className="paragraphColorSize">{ingredients}</p>
                <p>{flavoring}</p>
                <p className="title">CONTÉM GLÚTEN</p>
                <p className="fs-6 allergic redColorZinho title">{allergic}</p>
              </div>
              <div className="containerButton">
                <Link draggable="false">
                  <button>VEJA COMO É FACINHO DE FAZER!</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title">
                <p className="fs-3 whiteColor">Informação Nutricional</p>
                <p>{portion}</p>
                <img
                  src={imgTable}
                  alt={breadName}
                  draggable="false"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid reset">
        <img
          src={bannerPaoDeAlho}
          alt={breadName}
          className="img-fluid"
          draggable="false"
        />
      </section>
    </ContainerPageBread>
  );
};

export default PageBreadComponent;
