import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import Header from "../../components/header";
import { clientsContext } from "../../contexts/clientsContext";

const Dashboard = () => {
  const navigate = useNavigate();

  const { getClient, client } = useContext(clientsContext);

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      navigate("/login");
    }

    getClient();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Dashboard;
