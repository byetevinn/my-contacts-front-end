import styled from "styled-components";

export const DivHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px -10px 20px 15px var(--Color5);

  padding: 5px 50px;

  h1 {
    display: flex;
    text-align: center;

    font-size: 28px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;

    color: var(--Color1);
  }

  .div__buttons {
    display: flex;

    gap: 20px;

    button {
      display: flex;
      align-items: center;

      width: 100%;

      font-size: 30px;

      color: var(--Color1);

      box-sizing: border-box;
      border: none;
      border-radius: 4px;

      background: none;
      cursor: pointer;
    }

    button:hover {
      color: var(--Color4);
    }
  }
`;
