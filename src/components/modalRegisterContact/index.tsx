import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { contactsContext } from "../../contexts/contactsContext";

import { IContactData } from "../../contexts/interfaces";
import { createContactSchema } from "../../schemas/contactsSchemas";
import { IModalRegisterContactProps } from "./interface";

const ModalRegisterContact = ({
  activateModal,
  setActiateModal,
}: IModalRegisterContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactData>({
    resolver: yupResolver(createContactSchema),
  });

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
                type="text"
                placeholder="joão@mail.com"
                {...register("email")}
              />
              <p> {errors.email?.message} </p>
            </label>
            <label>
              Nome Completo
              <input
                type="text"
                placeholder="João dos Santos"
                {...register("fullName")}
              />
              <p> {errors.fullName?.message} </p>
            </label>
            <label>
              Celular
              <input
                type="text"
                placeholder="41998751475"
                {...register("phone")}
              />
              <p> {errors.phone?.message} </p>
            </label>
            <button type="submit">Criar</button>
          </form>
        </>
      )}
    </>
  );
};

export default ModalRegisterContact;
