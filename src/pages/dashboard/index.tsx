import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Header from "../../components/header";
import Contacts from "../../components/contacts";
import { clientsContext } from "../../contexts/clientsContext";
import ModalRegisterContact from "../../components/modalRegisterContact";

const Dashboard = () => {
  const [activateModal, setActiateModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const { getClient } = useContext(clientsContext);

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      navigate("/login");
    } else {
      getClient();
    }
  }, []);

  return (
    <>
      <Header />

      <button onClick={() => setActiateModal(!activateModal)}>
        Criar contato
      </button>
      <ModalRegisterContact
        activateModal={activateModal}
        setActiateModal={setActiateModal}
      />
      <ol>
        <Contacts />
      </ol>
    </>
  );
};

export default Dashboard;
