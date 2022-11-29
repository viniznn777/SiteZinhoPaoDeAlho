import React from "react";
import { useEffect, useState } from "react";
import { ScrollToTop } from "../../utilities/ScrollToTopFuction/ScrollToTopFunction";
import ContainerContact from "./Styles";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [subject, setSubject] = useState("");

  const Warning = (string) =>
    toast.warning(string, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  useEffect(() => {
    document.onload = ScrollToTop();
  }, []);

  return (
    <ContainerContact className="container-fluid">
      <section className="container-fluid bg-yellow-zinho reset border-radius-bottom-right">
        <ToastContainer />
        <div className="container paddingTopBottom ">
          <div className="title">
            <p className="fs-3 whiteTextColor title">Fale com a ZINHO</p>
            <p className="fs-5 grayTextColor">
              Para que possamos atender da melhor forma as suas dúvidas,
              sugestões ou críticas, preencha corretamente os campos abaixo. A
              nossa equipe entrará em contato com a melhor solução. Se preferir,
              entre em contato com a gente no número{" "}
              <a href="tel:+551639666887"> 16 3966-6887</a>.
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-yellow-zinho paddingTopBottom border-radius-top-right">
        <div className="container">
          <form className="form centerColumn gap">
            <label htmlFor="assunto" className="fs-4">
              Assunto <span>*</span>
            </label>
            <select
              name="assunto"
              id="assunto"
              required
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">ESCOLHA UM ASSUNTO</option>
              <option value="CONTATO COMERCIAL">CONTATO COMERCIAL</option>
              <option value="ASSESSORIA DE IMPRENSA">
                ASSESSORIA DE IMPRENSA
              </option>
              <option value="DÚVIDAS, SUGESTÕES E CRÍTICAS">
                DÚVIDAS, SUGESTÕES E CRÍTICAS
              </option>
              <option value="PRECISO DE UMA SOLUÇÃO">
                PRECISO DE UMA SOLUÇÃO
              </option>
              <option value="OUTRO">OUTRO</option>
            </select>
            <label htmlFor="name" className="fs-4">
              Nome <span>*</span>{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu Nome"
              title="Campo Obrigatório. Por favor digite seu primeiro nome, ou nome completo"
              className="inputValidation"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="fs-4">
              E-mail <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
              title="Campo Obrigatório. Por favor digite seu e-mail"
              className="inputValidation"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="telefone" className="fs-4">
              Telefone <span>*</span>
            </label>
            <input
              type="tel"
              name="telefone"
              id="telefone"
              placeholder="Digite seu telefone"
              title="Campo Obrigatório. Por favor digite seu número de telefone"
              className="inputValidation"
              onChange={(e) => setTelephone(e.target.value)}
            />
            <label htmlFor="textarea" className="fs-4">
              Escreva sua mensagem:
            </label>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Uma breve mensagem"
              title="Digite uma mensagem"
            ></textarea>
            <div className="containerButton">
              <input
                type="submit"
                value="Enviar"
                onClick={(e) => Validate(e)}
              />
            </div>
          </form>
          <p className="fs-5 redTextColor">
            Os campos marcados com "*" são obrigatórios!
          </p>
        </div>
      </section>
    </ContainerContact>
  );

  function Validate(e) {
    if (!name || !email || !telephone) {
      e.preventDefault();
      Warning("Alguns campos Obrigatórios não estão preenchidos!");
    } else if (!subject) {
      Warning("Escolha um Assunto a ser tratado!");
    }
  }
};

export default ContactUs;
