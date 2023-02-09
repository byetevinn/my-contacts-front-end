import { useContext } from "react";
import { useForm } from "react-hook-form";
import { clientsContext } from "../../contexts/clientsContext";
import { IModalRegisterClientProps } from "./interface";

const ModalRegisterClient = ({
  activateModal,
  setActiateModal,
}: IModalRegisterClientProps) => {
  const { register, handleSubmit } = useForm();

  const { registerClient } = useContext(clientsContext);

  return (
    <>
      {activateModal && (
        <>
          <button onClick={() => setActiateModal(!activateModal)}>X</button>
          <form onSubmit={handleSubmit(registerClient)}>
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
        </>
      )}
    </>
  );
};

export default ModalRegisterClient;
