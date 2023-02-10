import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteClientApi from "../services/client/deleteClientApi";

import LoginClientApi from "../services/login/loginClientApi";
import RegisterClientApi from "../services/client/registerClientApi";
import GetClientApi from "../services/client/getClientApi";
import UpdateClientApi from "../services/client/updateClientApi";

import {
  IClient,
  IClientData,
  IClientLogin,
  IContextProps,
  IClientUpdate,
} from "./interfaces";

export const clientsContext = createContext<IClientsContext>(
  {} as IClientsContext
);

interface IClientsContext {
  loginClient: (clientData: IClientLogin) => void;
  registerClient: (clientData: IClientData) => void;
  getClient: () => void;
  updateClient: (data: IClientUpdate) => void;
  deleteClient: () => void;
  client: IClient;
}

const ClientsProvider = ({ children }: IContextProps) => {
  const [client, setClient] = useState<IClient>({} as IClient);

  const navigate = useNavigate();

  const loginClient = async (clientLogin: IClientLogin) => {
    try {
      await LoginClientApi(clientLogin);

      navigate("/dashboard");
    } catch (error) {}
  };

  const registerClient = async (data: IClientData) => {
    try {
      await RegisterClientApi(data);

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

    if (password!.length > 0) {
      await UpdateClientApi(clientData);
    } else {
      await UpdateClientApi(clientNoPassword);
    }
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
        registerClient,
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
