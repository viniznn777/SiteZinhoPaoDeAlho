import React from "react";
import ContainerPageBreadExportation from "./Styles";

const PageBreadComponent = ({
  breadName,
  ingredients,
  flavoring,
  allergic,
  portion,
  imgTable,
  bannerPaoDeAlho,
  IngredientsLanguage,
  ContainsGlutenLanguage,
  NutritionFacts,
}) => {
  return (
    <ContainerPageBreadExportation>
      <section className="container-fluid bg-zinho paddingTopBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title">
                <p className="fs-3 whiteColor">{breadName}</p>
                <p className="fs-3 whiteColor">{IngredientsLanguage}</p>
              </div>
              <div className="containerIngredientes">
                <p className="paragraphColorSize">{ingredients}</p>
                <p>{flavoring}</p>
                <p className="title">{ContainsGlutenLanguage}</p>
                <p className="fs-6 allergic redColorZinho title">{allergic}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title">
                <p className="fs-3 whiteColor">{NutritionFacts}</p>
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
    </ContainerPageBreadExportation>
  );
};

export default PageBreadComponent;
