import { createContext } from "react";

import { IClientsContextProps } from "./interfaces";

export const clientsContext = createContext({});

const clientsProvider = ({ children }: IClientsContextProps) => {
  return (
    <clientsContext.Provider value={{}}>{children}</clientsContext.Provider>
  );
};

export default clientsProvider;
