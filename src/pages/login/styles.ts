import styled from "styled-components";

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px 0px;

  padding: 50px 0px;
`;

export const Form = styled.form`
  min-width: 200px;
  max-width: 240px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px 0px;
  padding: 20px;

  border: 2px solid var(--Color3);
  border-radius: 8px;

  label {
    display: flex;
    flex-direction: column;

    gap: 5px 0px;

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
`;
