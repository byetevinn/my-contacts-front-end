import api from "./api";

import { IClientData } from "./interfaces";

const registerClient = async (clientData: IClientData) => {
  return await api
    .post("/clients", clientData)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};

export default registerClient;
