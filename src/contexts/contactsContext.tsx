import { createContext, useEffect, useState } from "react";

import CreateContactApi from "../services/contacts/createContactApi";
import DeleteContactApi from "../services/contacts/deleteContactApi";
import GetContactApi from "../services/contacts/getContactApi";
import UpdateContactApi from "../services/contacts/updateContactApi";

import { IContact, IContactData, IContextProps } from "./interfaces";

export const contactsContext = createContext<IContactsContext>(
  {} as IContactsContext
);

interface IContactsContext {
  createContact: (contactData: IContactData) => void;
  getContact: () => void;
  updateContact: (contactData: IContactData, id: string) => void;
  deleteContact: (id: string) => void;
  contacts: IContact[];
}

const ContactsProvider = ({ children }: IContextProps) => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  const createContact = async (contactData: IContactData) => {
    try {
      await CreateContactApi(contactData);

      await getContact();
    } catch (error) {}
  };

  const getContact = async () => {
    try {
      const allContacts = await GetContactApi();

      setContacts(allContacts);
    } catch (error) {}
  };

  const updateContact = async (contactData: IContactData, id: string) => {
    try {
      await UpdateContactApi(contactData, id);

      await getContact();
    } catch (error) {}
  };

  const deleteContact = async (id: string) => {
    await DeleteContactApi(id);

    await getContact();
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");

    token && getContact();
  }, []);

  return (
    <contactsContext.Provider
      value={{
        createContact,
        getContact,
        updateContact,
        deleteContact,
        contacts,
      }}
    >
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsProvider;
