import styled from "styled-components";
import tableBackground from "../../../../Imgs/tablebg.jpg";

const ContainerHomePreparation = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

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
  .paragraphColorSize2 {
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
  .paddingTopBottom {
    padding-top: 3em;
    padding-bottom: 3em;
  }
  .border-radius-bottom-right {
    border-bottom-right-radius: 25px;
  }
  .border-radius-top-right {
    border-top-right-radius: 25px;
  }
  .sectionButtons {
    background: url(${tableBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  .sectionButtons img {
    transition: 0.2s;

    &:hover {
      filter: drop-shadow(0 0 0.4rem #900000);
    }
  }
  .CenterItem {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ContainerHomePreparation;
