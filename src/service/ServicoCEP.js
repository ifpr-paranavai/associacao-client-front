import axios from "axios";

const brasilAbertoURL = "https://api.brasilaberto.com";

export const brasilAberto = axios.create({
  baseURL: brasilAbertoURL,
});

export const buscaCEP = async (cep) => {
  const { data } = await brasilAberto.get(`/v1/zipcode/${cep}`);
  return data;
};
