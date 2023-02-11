import styled from "styled-components";

export const DivModalClient = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.05);

  overflow: auto;

  .div__modal {
    min-width: 200px;
    max-width: 240px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--White);

    gap: 20px 0px;
    padding: 20px;

    border: 2px solid var(--Color3);
    border-radius: 8px;

    .div__exit {
      display: flex;
      justify-content: end;

      width: 100%;

      button {
        display: flex;
        justify-content: center;

        background-color: var(--Color3);
        color: var(--White);

        font-size: 18px;

        box-sizing: border-box;
        border: none;
        border-radius: 4px;

        padding: 6px 10px;

        cursor: pointer;
      }

      button:hover {
        background-color: var(--Color4);
      }
    }

    form {
      label {
        display: flex;
        flex-direction: column;

        gap: 5px 0px 0px 0px;

        input {
          width: 100%;

          font-size: 16px;

          box-sizing: border-box;
          border: 2px solid var(--Color3);
          border-radius: 4px;

          margin: 8px 0;
          padding: 12px 20px;
        }

        input:focus {
          border: 2px solid var(--Color4);
          outline: none;
        }

        p {
          font-size: 12px;
          color: var(--Error);

          padding: 0px 0px 15px 0px;
        }
      }

      button {
        width: 100%;

        font-size: 16px;

        background-color: var(--Color3);
        color: var(--White);

        box-sizing: border-box;
        border: none;
        border-radius: 4px;

        margin: 8px 0;
        padding: 12px 20px;

        cursor: pointer;
      }

      button:hover {
        background-color: var(--Color4);
      }

      .button__delete {
        background-color: var(--Care);
      }

      .button__delete:hover {
        background-color: var(--Care-hover);
      }
    }
  }
`;
