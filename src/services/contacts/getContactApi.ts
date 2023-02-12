import api from "../api";

const GetContactApi = async () => {
  const token = localStorage.getItem("@token");

  if (token) {
    api.defaults.headers = {
      Authorization: `bearer ${token}`,
    } as any;
  }

  return await api
    .get("/contacts")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);

      throw new Error();
    });
};

export default GetContactApi;
