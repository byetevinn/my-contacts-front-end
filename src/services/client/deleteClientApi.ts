import { toast } from "react-toastify";

import api from "../api";

const DeleteClientApi = async () => {
  return await api
    .delete("/clients")
    .then(() =>
      toast.success("Perfil deletado com sucesso", {
        autoClose: 1000,
        theme: "dark",
        toastId: 1,
      })
    )
    .catch((error) => console.log(error));
};

export default DeleteClientApi;
