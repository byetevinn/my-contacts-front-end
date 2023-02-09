import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginClientApi from "../services/loginClientApi";
import RegisterClientApi from "../services/registerClientApi";

import {
  IClientData,
  IClientLogin,
  IClientsContext,
  IClientsContextProps,
} from "./interfaces";

export const clientsContext = createContext<IClientsContext>(
  {} as IClientsContext
);

const ClientsProvider = ({ children }: IClientsContextProps) => {
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

  return (
    <clientsContext.Provider value={{ loginClient, registerClient }}>
      {children}
    </clientsContext.Provider>
  );
};

export default ClientsProvider;
