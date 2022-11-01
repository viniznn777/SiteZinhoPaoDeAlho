import styled from "styled-components";

const ContainerContact = styled.div`
  margin: 0;
  padding: 0;
  .paddingTopBottom {
    padding-top: 3em;
    padding-bottom: 3em;
  }

  .bg-yellow-zinho {
    background-color: #fdcc5d;
  }
  .bg-red-zinho {
    background-color: #e21921;
  }
  .reset {
    margin: 0;
    padding: 0;
  }
  .border-radius-bottom-right {
    border-bottom-right-radius: 25px;
  }
  .border-radius-top-right {
    border-top-right-radius: 25px;
  }
  .title {
    font-weight: bold;
  }
  .whiteTextColor {
    color: #ffffff;
  }
  .grayTextColor {
    color: #444444;
  }
  .redTextColor {
    color: #e21921;
  }
  .centerColumn {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .form label {
    font-size: 1.1rem;
  }
  .form select {
    padding: 12px;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    outline: none;
  }
  .form span {
    color: #e21921;
  }
  .form input {
    padding: 12px;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    outline: none;
    font-weight: bold;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
  .form textarea {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    outline: none;
    border: none;
    border-radius: 10px;
    padding-left: 15px;
    font-size: 1rem;
    font-weight: bold;
  }
  .form input[type="submit"] {
    width: max-content;
    padding: 0.9em 3em;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #e21921;
    color: #ffffff;
    transition: all 0.2s;
    cursor: pointer;
    &:active {
      transform: scale(0.95);
    }
    &:hover {
      background-color: rgba(190, 0, 0, 0.8);
    }
  }
  .form .containerButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default ContainerContact;
