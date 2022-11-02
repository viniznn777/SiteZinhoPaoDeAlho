import styled from "styled-components";

const ContainerBolinhaTradicional = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  #container-img-paes-tradicional {
    transition: all 0.2s;
    &:hover {
      filter: drop-shadow(0 0 0.4rem rgba(213, 148, 0, 0.8));
    }
  }

  #container-img-paes-baguete-picante {
    transition: all 0.2s;
    &:hover {
      filter: drop-shadow(0 0 0.4rem rgba(229, 32, 32, 0.8));
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
`;
export default ContainerBolinhaTradicional;
