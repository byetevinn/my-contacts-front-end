import { useContext } from "react";
import { useForm } from "react-hook-form";
import { clientsContext } from "../../contexts/clientsContext";

const Login = () => {
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
      <button>Registrar-se</button>
    </>
  );
};

export default Login;
