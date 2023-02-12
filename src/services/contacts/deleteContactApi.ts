import { toast } from "react-toastify";

import api from "../api";

const DeleteContactApi = async (id: string) => {
  return await api
    .delete(`/contacts/${id}`)
    .then(() =>
      toast.success("Perfil deletado com sucesso", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      })
    )
    .catch((error) => console.log(error));
};

export default DeleteContactApi;
