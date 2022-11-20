import styled from "styled-components";
import bgTable from "../../../../Imgs/tablebg.jpg";

const ContainerComponentePreparo = styled.div`
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
  .centerItem {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  span {
    color: #e21921;
  }
  .bgTable {
    background-image: url(${bgTable});
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    background-attachment: fixed;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
`;

export default ContainerComponentePreparo;
