import React from "react";
import FooterContainer from "./Styles";

import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";

import CERTIFICADO1 from "../../../Imgs/certified1.png";
import CERTIFICADO2 from "../../../Imgs/certified2.png";
import CERTIFICADO3 from "../../../Imgs/certified3.png";

const Footer = () => {
  return (
    <FooterContainer className="container-fluid paddingTop">
      <div className="container paddingTop center gapFooter">
        <p className="fs-5">Siga a gente nas redes sociais:</p>
        <div className="containerSociais">
          <a
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <button>
              <BsFacebook />
            </button>
          </a>
          <a
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <button className="buttonYellow">
              <BsInstagram />
            </button>
          </a>
          <a
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <button>
              <BsYoutube />
            </button>
          </a>
          <a
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <button className="buttonYellow">
              <BsLinkedin />
            </button>
          </a>
        </div>
        <div className="containerCertifieds">
          <img
            src={CERTIFICADO1}
            alt=""
            className="img-fluid img1"
            draggable="false"
          />
          <a
            href="https://secure.d4sign.com.br/gopaperless/sustentabilidade/084bc548-5c8c-4d0a-9a09-0de6e0b74659/Zinho-Industria-e-Com%C3%A9rcio-de-Alimentos-Ltda.html"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <img
              src={CERTIFICADO2}
              alt=""
              className="img-fluid img2"
              draggable="false"
            />
          </a>
          <img
            src={CERTIFICADO3}
            alt=""
            className="img-fluid img3"
            draggable="false"
          />
        </div>
        <div className="container address">
          <p>
            Zinho Indústria e Comércio de Alimentos Ltda © 2022 TODOS OS
            DIREITOS RESERVADOS. Rua Marcelo Pinto de Moraes, 105 - Pq.
            Industrial - Avelino Alves Palma - CEP: 14077-440 - Ribeirão Preto
            (16) 39666887 | sac@zinho.com
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
