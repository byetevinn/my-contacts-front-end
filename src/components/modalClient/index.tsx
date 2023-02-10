import { useContext } from "react";
import { useForm } from "react-hook-form";
import { clientsContext } from "../../contexts/clientsContext";

import { IModalClientProps } from "./interface";

const ModalClient = ({ activateModal, setActiateModal }: IModalClientProps) => {
  const { register, handleSubmit } = useForm();

  const { deleteClient } = useContext(clientsContext);

  return (
    <>
      {activateModal && (
        <>
          <button onClick={() => setActiateModal(!activateModal)}>X</button>
          <form /* onSubmit={handleSubmit} */>
            <label>
              Email
              <input
                type="email"
                placeholder="joão@mail.com"
                {...register("email")}
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                placeholder="joão@mail.com"
                {...register("password")}
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
            <button type="submit">Registrar</button>
          </form>
          <button onClick={() => deleteClient()}>Deletar Perfil</button>
        </>
      )}
    </>
  );
};

export default ModalClient;
