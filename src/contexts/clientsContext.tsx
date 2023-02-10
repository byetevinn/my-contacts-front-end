import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteClientApi from "../services/deleteClientApi";

import GetClientApi from "../services/getClientApi";
import LoginClientApi from "../services/loginClientApi";
import RegisterClientApi from "../services/registerClientApi";

import {
  IClient,
  IClientData,
  IClientLogin,
  IClientsContext,
  IClientsContextProps,
} from "./interfaces";

export const clientsContext = createContext<IClientsContext>(
  {} as IClientsContext
);

const ClientsProvider = ({ children }: IClientsContextProps) => {
  const [client, setClient] = useState<IClient>({} as IClient);

  const navigate = useNavigate();

  const loginClient = async (clientLogin: IClientLogin) => {
    try {
      await LoginClientApi(clientLogin);

      navigate("/dashboard");
    } catch (error) {}
  };

  const registerClient = async (clientData: IClientData) => {
    try {
      await RegisterClientApi(clientData);

      navigate("/");
    } catch (error) {}
  };

  const getClient = async () => {
    const clientData = await GetClientApi();

    setClient(clientData);
  };

  const deleteClient = async () => {
    await DeleteClientApi();

    localStorage.clear();

    navigate("/login");
  };

  return (
    <clientsContext.Provider
      value={{ loginClient, registerClient, getClient, deleteClient, client }}
    >
      {children}
    </clientsContext.Provider>
  );
};

export default ClientsProvider;
