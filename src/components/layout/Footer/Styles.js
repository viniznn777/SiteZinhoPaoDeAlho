import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;

  .gapFooter {
    display: flex;
    gap: 33px;
  }

  .paddingTop {
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .containerSociais {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  .containerSociais button {
    border: none;
    font-size: 1.9rem;
    background-color: transparent;
    transition: all 0.2s;
    &:hover {
      color: #f80003;
    }
  }
  .containerSociais .buttonYellow {
    &:hover {
      color: rgb(253, 145, 0);
    }
  }
  .containerCertifieds {
    display: flex;
    align-items: center;
    gap: 1.1rem;
  }
  .containerCertifieds .img1 {
    width: 230px;
    height: 113px;
  }
  .containerCertifieds .img2 {
    width: 250px;
    height: 100px;
  }
  .containerCertifieds .img3 {
    width: 125px;
    height: 125px;
  }
  .address {
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    .containerCertifieds {
      display: flex;
      flex-direction: column;
      gap: 1.9rem;
    }
  }
`;

export default FooterContainer;
