import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { clientsContext } from "../../contexts/clientsContext";

import { IClientData } from "../../contexts/interfaces";
import { IModalRegisterClientProps } from "./interface";

import { createClientSchema } from "../../schemas/clientsSchemas";

const ModalRegisterClient = ({
  activateModal,
  setActiateModal,
}: IModalRegisterClientProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientData>({ resolver: yupResolver(createClientSchema) });

  const { createClient } = useContext(clientsContext);

  return (
    <>
      {activateModal && (
        <>
          <button onClick={() => setActiateModal(!activateModal)}>X</button>
          <form onSubmit={handleSubmit(createClient)}>
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
              Senha
              <input
                type="password"
                placeholder="*******"
                {...register("password")}
              />
              <p> {errors.password?.message} </p>
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
            <button type="submit">Registrar</button>
          </form>
        </>
      )}
    </>
  );
};

export default ModalRegisterClient;
