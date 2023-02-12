import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header";
import Contacts from "../../components/contacts";
import ModalRegisterContact from "../../components/modalRegisterContact";
import { clientsContext } from "../../contexts/clientsContext";

import { DivDashboard } from "./styles";

const Dashboard = () => {
  const [activateModal, setActiateModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const { getClient } = useContext(clientsContext);

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      navigate("/login");
    } else {
      setTimeout(getClient, 1000);
    }
  }, []);

  return (
    <DivDashboard>
      <Header />

      <main>
        <div className="div__button">
          <button onClick={() => setActiateModal(!activateModal)}>
            Criar contato
          </button>
        </div>

        <ModalRegisterContact
          activateModal={activateModal}
          setActiateModal={setActiateModal}
        />

        <Contacts />
      </main>
    </DivDashboard>
  );
};

export default Dashboard;
