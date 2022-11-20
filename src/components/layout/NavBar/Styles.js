import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 120px;
  background-color: #fdcc5d;
  position: absolute;
  top: 0;
  position: sticky;
  z-index: 999;
  transition: all 0.19s;

  nav {
    height: 100%;
  }

  nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 28px;
    height: 100%;
  }
  nav ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: #383232;
    font-size: 1.1rem;
    font-weight: 550;
    height: 100%;
    transition: all 0.2s;
    &:hover {
      color: #ffffff;
    }
  }

  .dropdown {
    overflow: hidden;
    position: absolute;
    padding: 15px;
    width: max-content;
    background-color: #ffffff;
    display: flex;
    height: max-content;
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
    z-index: 888;
    display: none;
  }
  .dropdown div {
    transform: translate(0 -100%);
    transition: all 0.5s 0.1s;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .dropdown div li a {
    display: block;
    width: 100%;
    &:hover {
      color: #ffffff;
    }
  }
  .dropdown div li {
    padding: 5px;
    transition: all 0.5s;
    &:hover {
      background-color: #e21921;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.3rem;
    cursor: pointer;
    display: none;
  }

  #activeDropdown:hover .dropdown {
    display: block;
  }

  #activeDropdownProducts:hover .dropdown {
    display: block;
  }
  .menu-mobile {
    width: 100%;
    height: 100vh;
    background-color: #fdcc5d;
    position: absolute;
    top: 100%;
    position: fixed;
    z-index: 99999999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation-duration: 0.6s;
    overflow-y: scroll;
  }
  .menu-mobile nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .menu-mobile nav ul li details {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  .menu-mobile button {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.3rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    nav.menuDesktop {
      display: none;
    }
    .logoMarca {
      margin-left: 1.2rem;
    }
    button {
      display: block;
      margin-right: 1.2rem;
    }
    justify-content: space-between;
  }

  // KeyFrames //

  @keyframes OpenMenu {
    0% {
      top: 100%;
    }
    100% {
      top: 0;
    }
  }
  @keyframes CloseMenu {
    0% {
      top: 0;
    }
    100% {
      top: 100%;
    }
  }
`;

export default Header;
