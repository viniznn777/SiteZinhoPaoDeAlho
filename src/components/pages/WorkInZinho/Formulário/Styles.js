import styled from "styled-components";

const FormWorkInZinho = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: #e21921;
  }
  label {
    font-size: 1.1rem;
  }
  input {
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
  textarea {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    outline: none;
    border: none;
    border-radius: 10px;
    padding-left: 15px;
    font-size: 1rem;
    font-weight: bold;
  }
  select {
    padding: 12px;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    outline: none;
  }
  input[type="submit"] {
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

  .containerButton {
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
  .aviso {
    border: 3px solid red;
    padding: 15px;
  }
  .aviso .title {
    color: red;
    font-weight: bold;
  }
  .aviso p {
    color: red;
  }
  .aviso p a {
    color: red;
  }
  .aviso .checkbox {
    color: #e21921;
  }
  .aviso .checkbox input {
    width: 25px;
    height: 25px;
    accent-color: #e21921;
  }
  .container-cidade-estado {
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    .container-cidade-estado {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default FormWorkInZinho;
