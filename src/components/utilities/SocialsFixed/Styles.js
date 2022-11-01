import styled from "styled-components";

const SocialsFixed = styled.div`
  position: absolute;
  top: 50%;
  width: max-content;
  padding: 10px;
  background-color: rgb(253, 145, 0);
  display: flex;
  flex-direction: column;
  z-index: 350;
  position: fixed;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 1px 1px 5px black;

  button {
    border: none;
    outline: none;
    font-size: 1.6rem;
    background-color: transparent;
    transition: all 0.2s;
    &:hover {
      color: #ffffff;
    }
  }
`;

export default SocialsFixed;
