import styled from "styled-components";

export const DivHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px -10px 20px 15px var(--Color5);

  padding: 5px 50px;

  .div__buttons {
    display: flex;

    gap: 20px;

    button {
      display: flex;
      align-items: center;

      width: 100%;

      font-size: 30px;

      color: var(--Color3);

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
