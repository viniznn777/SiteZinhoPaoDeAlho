import styled from "styled-components";

const ContainerBolinhaRecheadoCatupiry = styled.div`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  margin: 0;

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
  .container-img {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-direction: column;
  }
  .container-img img {
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  }
  .paddingTopBottomSmall {
    padding: 1em;
  }
  #container-img-paes-linguica {
    transition: all 0.2s;
    &:hover {
      filter: drop-shadow(0 0 0.4rem #b82a74);
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

export default ContainerBolinhaRecheadoCatupiry;
