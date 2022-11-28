import styled from "styled-components";

const ContainerExportation = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

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
  .centerItem {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .textAnimate {
    animation: ColorText 0.5s infinite;
  }

  @keyframes ColorText {
    0% {
      color: #e21921;
    }
    50% {
      color: rgba(88, 0, 149, 0.8);
    }
    100% {
      color: rgba(4, 2, 26, 0.8);
    }
  }
`;
export default ContainerExportation;
