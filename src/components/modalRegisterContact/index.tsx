import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { contactsContext } from "../../contexts/contactsContext";

import { IContactData } from "../../contexts/interfaces";
import { createContactSchema } from "../../schemas/contactsSchemas";

import { IModalRegisterContactProps } from "./interface";

import { DivModalRegisterContact } from "./styles";

import { MdOutlineExitToApp } from "react-icons/md";

const ModalRegisterContact = ({
  activateModal,
  setActiateModal,
}: IModalRegisterContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactData>({
    resolver: yupResolver(createContactSchema),
  });

  const { createContact } = useContext(contactsContext);

  const onCreate = (data: IContactData) => {
    try {
      createContact(data);

      setActiateModal(!activateModal);

      reset();
    } catch (error) {}
  };

  return (
    <>
      {activateModal && (
        <DivModalRegisterContact>
          <div className="div__modal">
            <div className="div__exit">
              <button onClick={() => setActiateModal(!activateModal)}>
                {<MdOutlineExitToApp />}
              </button>
            </div>
            <form onSubmit={handleSubmit(onCreate)}>
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
          </div>
        </DivModalRegisterContact>
      )}
    </>
  );
};

export default ModalRegisterContact;
