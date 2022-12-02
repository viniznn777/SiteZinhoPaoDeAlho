import React from "react";
import { useEffect } from "react";
import ContainerExportation from "./Styles";
import US from "../../../Imgs/slider/img2.jpg";
import ComponentExportationBread from "./ComponentExportationBread/ComponentExportationBread";
import tb1 from "../../../Imgs/paes/tablesExportation/tb1.png";
import tb2 from "../../../Imgs/paes/tablesExportation/tb2.png";
import tb3 from "../../../Imgs/paes/tablesExportation/tb3.png";
import tb4 from "../../../Imgs/paes/tablesExportation/tb4.png";
import Mercosul from "../../../Imgs/mercosul.jpg";
import FindTheBread from "../../../Imgs/img3.jpg";
import { ScrollToTop } from "../../utilities/ScrollToTopFuction/ScrollToTopFunction";

const Exportation = () => {
  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ContainerExportation className="container-fluid bg-zinho">
      <section className="container-fluid paddingTopBottom bg-zinho-red border-radius-bottom-right">
        <div className="container ">
          <p className="fs-2 title whiteColor">
            QUALIDADE QUE ATRAVESSA FRONTEIRAS
          </p>
          <p className="fs-5 paragraphColorSize whiteColor">
            Zinho começou uma nova revolução na indústria e no comércio,
            intensificando o seu protagonismo ao exportar os seus produtos de
            norte a sul.
          </p>
        </div>
      </section>
      <section>
        <figure className="reset">
          <img
            src={US}
            alt="Banner of garlic bread, exported to the United States"
            className="img-fluid"
            draggable="false"
          />
        </figure>
      </section>
      <ComponentExportationBread
        breadName="GARLIC BREAD ORIGINAL"
        IngredientsLanguage="INGREDIENTS"
        ingredients="Wheat flour enriched with iron and folic acid, water, margarine, mozzarella cheese, soy oil, garlic, sugar, salt, baker’s yeast, powder, enhanced flour, parsley, monosodium glutamate flavour enhancer, calcium propinate preservative and green onion."
        ContainsGlutenLanguage="CONTAINS GLUTEN"
        allergic="ALLERGY WARNING: CONTAINS WHEAT, MILK AND SOY DERIVATES."
        NutritionFacts="NUTRITION FACTS"
        portion="Serving size 60 g (1 unity)"
        imgTable={tb1}
      />
      <ComponentExportationBread
        breadName="GARLIC BREAD MILD SPICY"
        IngredientsLanguage="INGREDIENTS"
        ingredients="Wheat flour enriched with iron and folic acid, water, margarine, mozzarella cheese, garlic, sugar, salt, soy oil, aji crystal pepper, baker’s yeast, powder, enhanced flour, parsley, monosodium glutamate flavour enhancer, calcium propinate preservative and green onion."
        ContainsGlutenLanguage="CONTAINS GLUTEN"
        allergic="ALLERGY WARNING: CONTAINS WHEAT, MILK AND SOY DERIVATES"
        NutritionFacts="NUTRITION FACTS"
        portion="Serving size 60 g (1 unity)"
        imgTable={tb2}
      />
      <section>
        <figure className="reset">
          <img
            src={Mercosul}
            alt="Banner of garlic bread, exported to the Mercosul"
            className="img-fluid"
            draggable="false"
          />
        </figure>
      </section>
      <ComponentExportationBread
        breadName="PAN DE AJO TRADICIONAL"
        IngredientsLanguage="INGREDIENTES"
        ingredients="Harina de trigo enriquecida con hierro y ácido fólico, agua, margarina, queso tipo mozarela, aceite de soya, ajo, azúcar, sal, levadura biológica seca, mejorado de harina, perejil, potenciador de sabor glutamato monosódico, conservante propionato de cálcio y cebollín."
        ContainsGlutenLanguage="CONTIENE GLUTEN"
        allergic="ALÉRGICOS: CONTIENE DERIVADOS DE TRIGO, LECHE Y SOYA."
        NutritionFacts="INFORMACIÓN NUTRICIONAL"
        portion="Porción de 40 g (1/2 unidad)"
        imgTable={tb3}
      />
      <ComponentExportationBread
        breadName="PAN DE AJO PICANTE"
        IngredientsLanguage="INGREDIENTES"
        ingredients="Harina de trigo enriquecida con hierro y ácido fólico, agua, margarina, queso tipo mozarela, aceite de soya, ajo, azúcar, sal, levadura biológica seca, mejorado de harina, perejil, potenciador de sabor glutamato monosódico, conservante propionato de cálcio y cebollín.
        "
        ContainsGlutenLanguage="CONTIENE GLUTEN"
        allergic="ALÉRGICOS: CONTIENE DERIVADOS DE TRIGO, LECHE Y SOYA."
        NutritionFacts="INFORMACIÓN NUTRICIONAL"
        portion="Porción de 60 g (1 unidad)"
        imgTable={tb4}
      />
      <section>
        <figure>
          <img
            src={FindTheBread}
            alt="Banner of garlic bread, exported to the Mercosul"
            className="img-fluid border-radius-bottom-right"
            draggable="false"
          />
        </figure>
      </section>
    </ContainerExportation>
  );
};

export default Exportation;
