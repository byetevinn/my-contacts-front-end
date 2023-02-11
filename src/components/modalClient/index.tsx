import { useContext } from "react";
import { useForm } from "react-hook-form";

import { clientsContext } from "../../contexts/clientsContext";

import { IClientData } from "../../contexts/interfaces";
import { IModalClientProps } from "./interface";

const ModalClient = ({ activateModal, setActiateModal }: IModalClientProps) => {
  const { register, handleSubmit } = useForm<IClientData>();

  const { updateClient, deleteClient, client } = useContext(clientsContext);

  const { email, fullName, phone } = client;

  return (
    <>
      {activateModal && (
        <>
          <button onClick={() => setActiateModal(!activateModal)}>X</button>
          <form onSubmit={handleSubmit(updateClient)}>
            <label>
              Email
              <input type="email" {...register("email")} defaultValue={email} />
            </label>
            <label>
              Senha
              <input type="password" {...register("password")} />
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
            <button type="submit">Atualizar</button>
          </form>
          <button onClick={() => deleteClient()}>Deletar Perfil</button>
        </>
      )}
    </>
  );
};

export default ModalClient;
