import { useContext } from "react";
import { useForm } from "react-hook-form";
import { contactsContext } from "../../contexts/contactsContext";

import { IContactData } from "../../contexts/interfaces";

import { IModalContactProps } from "./interface";

const ModalContact = ({
  activateModal,
  setActiateModal,
  contact,
  id,
}: IModalContactProps) => {
  const { register, handleSubmit } = useForm<IContactData>();

  const { updateContact } = useContext(contactsContext);

  const update = (data: IContactData) => {
    updateContact(data, id);
  };

  const { email, fullName, phone } = contact;

  return (
    <>
      {activateModal && (
        <>
          <button onClick={() => setActiateModal(!activateModal)}>X</button>
          <form onSubmit={handleSubmit(update)}>
            <label>
              Email
              <input type="email" {...register("email")} defaultValue={email} />
            </label>
            <label>
              Nome Completo
              <input
                type="text"
                {...register("fullName")}
                defaultValue={fullName}
              />
            </label>
            <label>
              Celular
              <input
                type="number"
                {...register("phone")}
                defaultValue={phone}
              />
            </label>
            <button type="submit">Editar</button>
          </form>
        </>
      )}
    </>
  );
};

export default ModalContact;
