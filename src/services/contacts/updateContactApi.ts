import { toast } from "react-toastify";

import api from "../api";

import { IContactUpdate } from "../../contexts/interfaces";

const UpdateContactApi = async (contactData: IContactUpdate, id: string) => {
  return await api
    .patch(`/contacts/${id}`, contactData)
    .then(() =>
      toast.success("Contato atualizado com sucesso", {
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

      throw new Error();
    });
};

export default UpdateContactApi;
