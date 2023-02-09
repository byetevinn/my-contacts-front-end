import { createContext } from "react";
import LoginClient from "../services/loginClientApi";

import {
  IClientLogin,
  IClientsContext,
  IClientsContextProps,
} from "./interfaces";

export const clientsContext = createContext<IClientsContext>(
  {} as IClientsContext
);

const ClientsProvider = ({ children }: IClientsContextProps) => {
  const loginClient = async (clientLogin: IClientLogin) => {
    await LoginClient(clientLogin);
  };

  return (
    <clientsContext.Provider value={{ loginClient }}>
      {children}
    </clientsContext.Provider>
  );
};

export default ClientsProvider;
