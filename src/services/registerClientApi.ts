import { toast } from "react-toastify";

import { IClientData } from "../contexts/interfaces";

import api from "./api";

const RegisterClientApi = async (clientData: IClientData) => {
  return await api
    .post("/clients", clientData)
    .then(() => {
      toast.success("Registrado com sucesso", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      });
    })
    .catch((error) => {
      console.log(error);

      toast.error("Erro ao se registrar", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      });

      throw new Error();
    });
};

export default RegisterClientApi;
