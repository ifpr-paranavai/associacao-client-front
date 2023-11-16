import axios from "axios";

const brasilApiURL = "https://brasilapi.com.br/api";

export const brasilAPI = axios.create({
  baseURL: brasilApiURL,
});

export const buscaCEP = async (cep) => {
  const { data } = await brasilAPI.get(`/cep/v1/${cep}`);
  return data;
};
