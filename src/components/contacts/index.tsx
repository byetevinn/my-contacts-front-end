import { useContext, useState } from "react";
import { contactsContext } from "../../contexts/contactsContext";

import { v4 as uuidv4 } from "uuid";
import ModalContact from "../modalContact";

const Contacts = () => {
  const [activateModal, setActiateModal] = useState<boolean>(false);

  const { deleteContact, contacts } = useContext(contactsContext);

  return (
    <>
      {contacts.length > 0 &&
        contacts.map(({ id, email, fullName, phone }) => {
          return (
            <li key={uuidv4()}>
              <div>
                <p>Email: {email}</p>
                <p>Nome: {fullName}</p>
                <p>Telefone: {phone}</p>
              </div>
              <div>
                <button onClick={() => setActiateModal(!activateModal)}>
                  Editar
                </button>
                <ModalContact
                  activateModal={activateModal}
                  setActiateModal={setActiateModal}
                  contact={{ email, fullName, phone }}
                  id={id}
                />
                <button onClick={() => deleteContact(id)}>Deletar</button>
              </div>
            </li>
          );
        })}
    </>
  );
};

export default Contacts;
