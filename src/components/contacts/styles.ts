import styled from "styled-components";

export const ListContacts = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 15px;

  li {
    width: 85vw;
    height: 100px;

    max-width: 350px;

    display: flex;
    justify-content: space-around;

    border: 2px solid var(--Color1);
    border-radius: 4px;

    padding: 10px;

    strong {
      color: var(--Color1);
    }

    .div__infos {
      display: flex;
      justify-content: center;
      flex-direction: column;

      gap: 10px 0px;

      p {
        width: 70vw;
        max-width: 300px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .div__buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      padding: 0px 0px 0px 10px;

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

      .button__delete:hover {
        color: var(--Care);
      }
    }
  }
`;
