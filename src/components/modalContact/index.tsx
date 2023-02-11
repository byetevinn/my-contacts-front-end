import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { contactsContext } from "../../contexts/contactsContext";

import { IContactData } from "../../contexts/interfaces";
import { updateContactSchema } from "../../schemas/contactsSchemas";

import { IModalContactProps } from "./interface";

const ModalContact = ({
  activateModal,
  setActiateModal,
  contact,
  id,
}: IModalContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactData>({
    resolver: yupResolver(updateContactSchema),
  });

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
              <input type="text" {...register("email")} defaultValue={email} />
              <p> {errors.email?.message} </p>
            </label>
            <label>
              Nome Completo
              <input
                type="text"
                {...register("fullName")}
                defaultValue={fullName}
              />
              <p> {errors.fullName?.message} </p>
            </label>
            <label>
              Celular
              <input type="text" {...register("phone")} defaultValue={phone} />
              <p> {errors.phone?.message} </p>
            </label>
            <button type="submit">Atualizar</button>
          </form>
        </>
      )}
    </>
  );
};

export default ModalContact;
