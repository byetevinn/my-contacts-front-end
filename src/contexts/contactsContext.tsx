import { createContext } from "vm";
import { IContextProps } from "./interfaces";

export const contactsContext = createContext({} as IContactsContext);

interface IContactsContext {}

const ContactsProvider = ({ children }: IContextProps) => {
  return (
    <contactsContext.Provider value={{}}>{children}</contactsContext.Provider>
  );
};
