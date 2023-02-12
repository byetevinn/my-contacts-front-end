import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteClientApi from "../services/clients/deleteClientApi";

import LoginClientApi from "../services/login/loginClientApi";
import CreateClientApi from "../services/clients/createClientApi";
import GetClientApi from "../services/clients/getClientApi";
import UpdateClientApi from "../services/clients/updateClientApi";

import {
  IClient,
  IClientData,
  IClientLogin,
  IContextProps,
  IClientUpdate,
} from "./interfaces";
import { contactsContext } from "./contactsContext";

export const clientsContext = createContext<IClientsContext>(
  {} as IClientsContext
);

interface IClientsContext {
  loginClient: (clientData: IClientLogin) => void;
  createClient: (clientData: IClientData) => void;
  getClient: () => void;
  updateClient: (data: IClientUpdate) => void;
  deleteClient: () => void;
  client: IClient;
}

const ClientsProvider = ({ children }: IContextProps) => {
  const [client, setClient] = useState<IClient>({} as IClient);

  const { getContact } = useContext(contactsContext);

  const navigate = useNavigate();

  const loginClient = async (clientLogin: IClientLogin) => {
    try {
      await LoginClientApi(clientLogin);

      navigate("/dashboard");

      getContact();
    } catch (error) {}
  };

  const createClient = async (data: IClientData) => {
    try {
      await CreateClientApi(data);

      navigate("/");
    } catch (error) {}
  };

  const getClient = async () => {
    const clientData = await GetClientApi();

    setClient(clientData);
  };

  const updateClient = async (clientData: IClientUpdate) => {
    const { email, password, fullName, phone } = clientData;

    const clientNoPassword = { email, fullName, phone };

    try {
      if (password!.length > 0) {
        await UpdateClientApi(clientData);
      } else {
        await UpdateClientApi(clientNoPassword);
      }
    } catch (error) {}
  };

  const deleteClient = async () => {
    await DeleteClientApi();

    localStorage.clear();

    navigate("/login");
  };

  return (
    <clientsContext.Provider
      value={{
        loginClient,
        createClient,
        getClient,
        updateClient,
        deleteClient,
        client,
      }}
    >
      {children}
    </clientsContext.Provider>
  );
};

export default ClientsProvider;
