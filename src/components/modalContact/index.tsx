import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { contactsContext } from "../../contexts/contactsContext";

import { updateContactSchema } from "../../schemas/contactsSchemas";

import { IContactData } from "../../contexts/interfaces";
import { IModalContactProps } from "./interface";

import { DivModalContact } from "./styles";

import { MdOutlineExitToApp } from "react-icons/md";

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

  const onUpdate = (data: IContactData) => {
    try {
      updateContact(data, id);

      setActiateModal(!activateModal);
    } catch (error) {}
  };

  const { email, fullName, phone } = contact;

  return (
    <>
      {activateModal && (
        <DivModalContact>
          <div className="div__modal">
            <div className="div__exit">
              <button onClick={() => setActiateModal(!activateModal)}>
                {<MdOutlineExitToApp />}
              </button>
            </div>
            <form onSubmit={handleSubmit(onUpdate)}>
              <label>
                Email
                <input
                  type="text"
                  {...register("email")}
                  defaultValue={email}
                />
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
                <input
                  type="text"
                  {...register("phone")}
                  defaultValue={phone}
                />
                <p> {errors.phone?.message} </p>
              </label>
              <button type="submit">Atualizar</button>
            </form>
          </div>
        </DivModalContact>
      )}
    </>
  );
};

export default ModalContact;
