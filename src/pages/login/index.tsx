import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import ModalRegisterClient from "../../components/modalRegisterClient";

import { clientsContext } from "../../contexts/clientsContext";
import { IClientLogin } from "../../contexts/interfaces";

const Login = () => {
  const [activateModal, setActiateModal] = useState<boolean>(false);

  const { loginClient } = useContext(clientsContext);

  const { register, handleSubmit } = useForm<IClientLogin>();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (token) {
      navigate("/dashboard");
    }
  }, []);

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
