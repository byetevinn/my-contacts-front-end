import { toast } from "react-toastify";
import { IClientLogin } from "../contexts/interfaces";

import api from "./api";

const LoginClientApi = async (clientLogin: IClientLogin) => {
  return await api
    .post("/login", clientLogin)
    .then((response) => {
      const token = response.data.token;

      localStorage.setItem("@token", token);

      toast.success("Logado com sucesso", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      });
    })
    .catch((error) => {
      console.log(error);

      toast.error("E-mail/senha incorretos", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      });

      throw new Error();
    });
};

export default LoginClientApi;
