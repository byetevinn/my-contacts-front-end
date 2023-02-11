import { useContext } from "react";
import { useForm } from "react-hook-form";
import { contactsContext } from "../../contexts/contactsContext";

import { IContactData } from "../../contexts/interfaces";
import { IModalRegisterContactProps } from "./interface";

const ModalRegisterContact = ({
  activateModal,
  setActiateModal,
}: IModalRegisterContactProps) => {
  const { register, handleSubmit } = useForm<IContactData>();

  const { createContact } = useContext(contactsContext);

  return (
    <>
      {activateModal && (
        <>
          <button onClick={() => setActiateModal(!activateModal)}>X</button>
          <form onSubmit={handleSubmit(createContact)}>
            <label>
              Email
              <input
                type="email"
                placeholder="joão@mail.com"
                {...register("email")}
              />
            </label>
            <label>
              Nome Completo
              <input
                type="text"
                placeholder="João dos Santos"
                {...register("fullName")}
              />
            </label>
            <label>
              Celular
              <input
                type="number"
                placeholder="41998751475"
                {...register("phone")}
              />
            </label>
            <button type="submit">Criar</button>
          </form>
        </>
      )}
    </>
  );
};

export default ModalRegisterContact;
