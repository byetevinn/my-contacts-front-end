import { toast } from "react-toastify";

import api from "../api";

import { IContactData } from "../../contexts/interfaces";

const CreateContactApi = async (contactData: IContactData) => {
  return await api
    .post("/contacts", contactData)
    .then(() => {
      toast.success("Contato criado com sucesso", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      });
    })
    .catch((error) => {
      console.log(error);

      toast.error("Erro ao criar contato", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      });

      throw new Error();
    });
};

export default CreateContactApi;
