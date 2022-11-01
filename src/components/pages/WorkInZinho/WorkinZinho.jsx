import React from "react";
import FormularioWorkInZinho from "./Formulário/FormWorkInZinho";
import ContainerWorkInZinho from "./Style";

const WorkInZinho = () => {
  return (
    <ContainerWorkInZinho className="container-fluid form">
      <section className="container-fluid bg-yellow-zinho border-radius-bottom-right">
        <div className="container paddingTopBottom">
          <div className="title fontWeightBold">
            <p className="fs-3 whiteColor">TRABALHE NA ZINHO</p>
          </div>
          <div className="descripition">
            <p className="grayTextColor fs-5 fontWeightBold">
              Respeitamos e valorizamos a inclusão e a diversidade. Nossas vagas
              de emprego são abertas a todos de forma igualitária. Avaliamos
              os(as) candidatos(as) de acordo com a sua experiência e
              competência. Aqui terminam todas as diferenças, somos todos
              iguais. Se você acredita que está preparado (a) para fazer parte
              de uma das empresas nacionais que mais cresceram nos últimos anos,
              esta é a hora. Sempre procuramos por profissionais capacitados,
              dinâmicos e dispostos a novos desafios. Preencha osrofissional, o
              setor responsável entrará em contato. Boa sorte!
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-yellow-zinho  border-radius-top-right paddingTopBottom">
        <div className="container">
          <FormularioWorkInZinho />
        </div>
      </section>
    </ContainerWorkInZinho>
  );
};

export default WorkInZinho;
