import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ModalRegisterClient from "../../components/modalRegisterClient";
import { clientsContext } from "../../contexts/clientsContext";

const Login = () => {
  const [activateModal, setActiateModal] = useState<boolean>(false);

  const { loginClient } = useContext(clientsContext);

  const { register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(loginClient)}>
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
            placeholder="*******"
            {...register("password")}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => setActiateModal(!activateModal)}>
        Registrar-se
      </button>
      <ModalRegisterClient
        activateModal={activateModal}
        setActiateModal={setActiateModal}
      />
    </>
  );
};

export default Login;
