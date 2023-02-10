import { toast } from "react-toastify";

import api from "../api";

import { IClientData } from "../../contexts/interfaces";

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
