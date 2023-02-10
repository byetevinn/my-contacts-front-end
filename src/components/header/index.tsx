import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalClient from "../modalClient";

const Header = () => {
  const [activateModal, setActiateModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const toExit = () => {
    localStorage.clear();

    navigate("/log");
  };

  return (
    <>
      <header>
        <div>
          <h1>My Contacts</h1>
        </div>
        <div>
          <button onClick={() => setActiateModal(!activateModal)}>
            Perfil
          </button>
          <button onClick={() => toExit()}>Sair</button>
        </div>
      </header>
      <ModalClient
        activateModal={activateModal}
        setActiateModal={setActiateModal}
      />
    </>
  );
};

export default Header;
