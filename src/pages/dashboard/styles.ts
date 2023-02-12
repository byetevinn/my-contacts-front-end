import styled from "styled-components";

export const DivDashboard = styled.div`
  display: flex;
  flex-direction: column;

  main {
    padding: 0px 15px;

    .div__button {
      display: flex;
      align-items: flex-end;

      padding: 50px 0px 20px 0px;

      button {
        font-size: 16px;

        background-color: var(--Color3);
        color: var(--White);

        box-sizing: border-box;
        border: none;
        border-radius: 4px;

        margin: 8px 0;
        padding: 6px 10px;

        cursor: pointer;
      }

      button:hover {
        background-color: var(--Color4);
      }
    }
  }
`;
