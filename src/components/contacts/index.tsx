import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { contactsContext } from "../../contexts/contactsContext";

import ModalContact from "../modalContact";

import { ListContacts } from "./styles";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Contacts = () => {
  const [activateModal, setActiateModal] = useState<boolean>(false);

  const { deleteContact, contacts } = useContext(contactsContext);

  return (
    <>
      {contacts.length > 0 && (
        <ListContacts>
          {contacts.map(({ id, email, fullName, phone }) => {
            return (
              <li key={uuidv4()}>
                <div className="div__infos">
                  <p>
                    <strong>Email:</strong> {email}
                  </p>
                  <p>
                    <strong>Nome:</strong> {fullName}
                  </p>
                  <p>
                    <strong>Telefone:</strong> {phone}
                  </p>
                </div>
                <div className="div__buttons">
                  <button onClick={() => setActiateModal(!activateModal)}>
                    {<AiOutlineEdit />}
                  </button>
                  <button
                    className="button__delete"
                    onClick={() => deleteContact(id)}
                  >
                    {<AiOutlineDelete />}
                  </button>
                </div>
                <ModalContact
                  activateModal={activateModal}
                  setActiateModal={setActiateModal}
                  contact={{ email, fullName, phone }}
                  id={id}
                />
              </li>
            );
          })}
        </ListContacts>
      )}
    </>
  );
};

export default Contacts;
