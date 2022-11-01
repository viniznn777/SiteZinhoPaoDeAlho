import styled from "styled-components";

const ContainerAbout = styled.div`
  margin: 0;
  padding: 0;

  .reset {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .paddingTopBottom {
    padding-top: 3em;
    padding-bottom: 3em;
  }
  .bg-zinho {
    background-color: #fdcc5d;
    border-bottom-right-radius: 25px;
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
  .ytb-thumb {
    background-image: url(https://i.ytimg.com/vi_webp/aNBnFCFc0YI/maxresdefault.webp);
    width: 900px;
    height: 500px;
    max-width: 95%;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  }

  .ytb-thumb a {
    width: 100%;
    height: 100%;
  }
  .ytb-thumb button {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .border-radius-bottom-left {
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .gapColumn {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .gapColumn button {
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
  .textCenter {
    text-align: center;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  .flex img {
    width: 250px;
    height: 110px;
  }
  .column p {
    line-height: 10px;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 991px) {
    .slogan {
      display: flex;
      gap: 1.3rem;
      flex-direction: column;
    }
    .slogan p {
      line-height: normal;
    }
  }
`;

export default ContainerAbout;
