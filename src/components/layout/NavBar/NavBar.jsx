import React from "react";
import Header from "./Styles";
import { Link } from "react-router-dom";
import Logo from "../../../Imgs/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import { useState } from "react";

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0.1) {
      document.querySelector("header").style.height = "85px";
    } else {
      document.querySelector("header").style.height = "";
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000 && openNavBar) {
      CloseMenuMobile();
    }
  });

  return (
    <Header>
      <div className="logoMarca">
        <Link to="/">
          <img src={Logo} alt="logo marca" draggable="false" />
        </Link>
      </div>

      <nav className="menuDesktop">
        <ul>
          <li>
            <Link to="/" draggable="false">
              Início
            </Link>
          </li>
          <li id="activeDropdown">
            <Link to="/empresa" draggable="false">
              ZINHO ORIGINAL
            </Link>
            <ul className="dropdown">
              <div>
                <li>
                  <Link to="/empresa">SOBRE A ZINHO</Link>
                </li>
                <li>
                  <Link to="/contato">FALE COM A ZINHO</Link>
                </li>
                <li>
                  <Link to="/trabalhe-conosco">TRABALHE NA ZINHO</Link>
                </li>
              </div>
            </ul>
          </li>
          <li id="activeDropdownProducts">
            <Link to="/pao-de-alho-zinho" draggable="false">
              PRODUTOS
            </Link>
            <ul className="dropdown">
              <div>
                <li>
                  <Link to="/pao-de-alho-zinho">PÃO DE ALHO ZINHO</Link>
                </li>
                <li>
                  <Link to="/pao-de-alho-zinho-recheado">
                    PÃO RECHEADO ZINHO
                  </Link>
                </li>
                <li>
                  <Link to="/pack-bolinha">PACK</Link>
                </li>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/preparo" draggable="false">
              PREPARO
            </Link>
          </li>
          <li>
            <Link to="/exportacao" draggable="false">
              EXPORTAÇÃO
            </Link>
          </li>
          <li>
            <Link to="/onde_encontrar" draggable="false">
              ONDE ENCONTRAR
            </Link>
          </li>
          <li>
            <a
              href="https://canal.ouvidordigital.com.br/zinhoalimentos"
              target="_blank"
              rel="noopener noreferrer"
              draggable="false"
            >
              CANAL DE DENÚNCIAS
            </a>
          </li>
        </ul>
      </nav>

      {/* =================================== */}
      {/* Início da Barra de Navegação Mobile */}
      {/* =================================== */}

      <button id="OpenMenuMobile" onClick={() => OpenMenuMobile()}>
        <GiHamburgerMenu />
      </button>
      <div className="menu-mobile" id="ContainerMenuMobile">
        <nav>
          <ul>
            <button onClick={() => CloseMenuMobile()}>
              <GrClose />
            </button>
            <li>
              <Link to="/" draggable="false" className="link">
                Início
              </Link>
            </li>
            <li id="activeDropdown">
              <details>
                <summary>ZINHO ORIGINAL</summary>
                <Link to="/empresa" className="link">
                  SOBRE A ZINHO
                </Link>
                <Link to="/contato" className="link">
                  FALE COM A ZINHO
                </Link>
                <Link to="/trabalhe-conosco" className="link">
                  TRABALHE NA ZINHO
                </Link>
              </details>
            </li>
            <li id="activeDropdownProducts">
              <details>
                <summary>PRODUTOS</summary>

                <Link to="/pao-de-alho-zinho" className="link">
                  PÃO DE ALHO ZINHO
                </Link>
                <Link to="/pao-de-alho-zinho-recheado" className="link">
                  PÃO RECHEADO ZINHO
                </Link>
                <Link to="/pack-bolinha" className="link">
                  PACK
                </Link>
              </details>
            </li>
            <li>
              <Link to="/preparo" draggable="false" className="link">
                PREPARO
              </Link>
            </li>
            <li>
              <Link to="/exportacao" draggable="false" className="link">
                EXPORTAÇÃO
              </Link>
            </li>
            <li>
              <Link to="/onde_encontrar" draggable="false" className="link">
                ONDE ENCONTRAR
              </Link>
            </li>
            <li>
              <a
                href="https://canal.ouvidordigital.com.br/zinhoalimentos"
                target="_blank"
                rel="noopener noreferrer"
                draggable="false"
              >
                CANAL DE DENÚNCIAS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  );

  function OpenMenuMobile() {
    document.getElementById("ContainerMenuMobile").style.top = "0";
    document.getElementById("ContainerMenuMobile").style.animationName =
      "OpenMenu";
    setOpenNavBar(true);
    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => {
        if (e) {
          CloseMenuMobile();
        }
      });
    }
  }
  function CloseMenuMobile() {
    document.getElementById("ContainerMenuMobile").style.top = "100%";
    document.getElementById("ContainerMenuMobile").style.animationName =
      "CloseMenu";
    setOpenNavBar(false);
  }
};

export default NavBar;
