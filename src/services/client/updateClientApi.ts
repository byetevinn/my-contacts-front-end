import { toast } from "react-toastify";

import api from "../api";

import { IClientUpdate } from "../../contexts/interfaces";

const UpdateClientApi = async (clientData: IClientUpdate) => {
  return await api
    .patch("/clients", clientData)
    .then(() =>
      toast.success("Cliente atualizado com sucesso", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      })
    )
    .catch((error) => {
      console.log(error);

      toast.error("Erro ao atualizar os dados", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      });
    });
};

export default UpdateClientApi;
