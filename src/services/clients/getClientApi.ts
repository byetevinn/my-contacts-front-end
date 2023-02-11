import api from "../api";

const GetClientApi = async () => {
  const token = localStorage.getItem("@token");

  if (token) {
    api.defaults.headers = {
      Authorization: `bearer ${token}`,
    } as any;
  }

  return await api
    .get("/clients")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export default GetClientApi;
