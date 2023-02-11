import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ModalClient from "../modalClient";

import { DivHeader } from "./styles";

import { MdOutlineExitToApp, MdAccountCircle } from "react-icons/md";

const Header = () => {
  const [activateModal, setActiateModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const toExit = () => {
    localStorage.clear();

    navigate("/login");
  };

  return (
    <DivHeader>
      <h1>My Contacts</h1>

      <div className="div__buttons">
        <button onClick={() => setActiateModal(!activateModal)}>
          {<MdAccountCircle />}
        </button>
        <button onClick={() => toExit()}>{<MdOutlineExitToApp />}</button>
      </div>

      <ModalClient
        activateModal={activateModal}
        setActiateModal={setActiateModal}
      />
    </DivHeader>
  );
};

export default Header;
