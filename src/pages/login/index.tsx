import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import ModalRegisterClient from "../../components/modalRegisterClient";

import { clientsContext } from "../../contexts/clientsContext";
import { IClientLogin } from "../../contexts/interfaces";
import { DivLogin, Form } from "./styles";

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
    <DivLogin>
      {!activateModal && (
        <Form onSubmit={handleSubmit(loginClient)}>
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
          <button type="submit">Entrar</button>

          <button onClick={() => setActiateModal(!activateModal)}>
            Registrar-se
          </button>
        </Form>
      )}
      <ModalRegisterClient
        activateModal={activateModal}
        setActiateModal={setActiateModal}
      />
    </DivLogin>
  );
};

export default Login;
