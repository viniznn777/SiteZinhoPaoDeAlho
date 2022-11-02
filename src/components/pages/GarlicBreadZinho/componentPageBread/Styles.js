import styled from "styled-components";

const ContainerPageBread = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .paddingTopBottom {
    padding-top: 3em;
    padding-bottom: 3em;
  }

  .reset {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .bg-zinho {
    background-color: #fdcc5d;
  }
  .bg-zinho-red {
    background-color: #e21921;
  }
  .title {
    font-weight: bold;
  }
  .paragraphColorSize {
    color: #323232;
    font-weight: bold;
    font-size: 1.1rem;
  }
  .whiteColor {
    color: #ffffff;
  }
  .redColorZinho {
    color: #e21921;
  }
  .yellowColorZinho {
    color: #f8af08;
  }
  .textCenter {
    text-align: center;
  }
  .containerButton button {
    padding: 15px;
    font-size: 1rem;
    background-color: #e21921;
    color: #ffffff;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    transition: all 0.2s;
    cursor: pointer;
    &:active {
      transform: scale(0.95);
    }
    &:hover {
      background-color: rgba(190, 0, 0, 0.8);
    }
  }

  #container-img-paes-baguete-picante {
    transition: all 0.2s;
    &:hover {
      filter: drop-shadow(0 0 0.4rem rgba(229, 32, 32, 0.8));
    }
  }

  #container-img-paes-bolinha {
    transition: all 0.2s;
    &:hover {
      filter: drop-shadow(0 0 0.4rem #f0aa2a);
    }
  }

  #container-img-paes-bolinha-picante {
    transition: all 0.2s;
    &:hover {
      filter: drop-shadow(0 0 0.4rem #952627);
    }
  }

  .container-paes {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container-paes a {
    text-decoration: none;
    color: #e21921;
    font-weight: bold;
  }
  .Flexcolumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default ContainerPageBread;
