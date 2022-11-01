import styled from "styled-components";
import contact_Us from "../../../Imgs/contate-nos.png";

const ContainerHome = styled.div`
  width: 100%;

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .containerImage {
    width: 95%;
    height: 70%;
    overflow: hidden;
    &:hover img {
      transform: scale(1.1);
    }
    border-radius: 5px;
  }
  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }

  .paddingTop {
    padding-top: 4em;
    padding-bottom: 4em;
  }

  button {
    padding: 12px 30px;
    border: none;
    outline: none;
    font-size: 1.1rem;
    background-color: #f80003;
    color: #ffffff;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: #c81e2b;
    }
    &:active {
      transform: scale(0.95);
    }
  }
  .contate_nos {
    background: linear-gradient(
        rgba(230, 18, 22, 0.88),
        rgba(230, 18, 22, 0.88)
      ),
      url(${contact_Us});
    background-attachment: fixed;
    color: #ffde00;
    background-size: contain;
    font-weight: bold;
  }
  #contact {
    padding: 12px 30px;
    border: 2px solid #fff;
    outline: none;
    font-size: 1.1rem;
    background-color: #f80003;
    color: #ffffff;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: #c81e2b;
    }
    &:active {
      transform: scale(0.95);
    }
  }
  @media screen and (max-width: 767px) {
    .products {
      display: flex;
      flex-direction: column;
      gap: 1.7rem;
    }
  }
`;

export default ContainerHome;
