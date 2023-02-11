import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { clientsContext } from "../../contexts/clientsContext";

import { IClientData } from "../../contexts/interfaces";
import { IModalClientProps } from "./interface";

import { updateClientSchema } from "../../schemas/clientsSchemas";

import { DivModalClient } from "./styles";

import { MdOutlineExitToApp } from "react-icons/md";

const ModalClient = ({ activateModal, setActiateModal }: IModalClientProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientData>({
    resolver: yupResolver(updateClientSchema),
  });

  const { updateClient, deleteClient, client } = useContext(clientsContext);

  const { email, fullName, phone } = client;

  return (
    <>
      {activateModal && (
        <DivModalClient>
          <div className="div__modal">
            <div className="div__exit">
              <button onClick={() => setActiateModal(!activateModal)}>
                {<MdOutlineExitToApp />}
              </button>
            </div>
            <form onSubmit={handleSubmit(updateClient)}>
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
                Senha
                <input type="password" {...register("password")} />
                <p> {errors.password?.message} </p>
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
              <button className="button__delete" onClick={() => deleteClient()}>
                Deletar Perfil
              </button>
            </form>
          </div>
        </DivModalClient>
      )}
    </>
  );
};

export default ModalClient;
