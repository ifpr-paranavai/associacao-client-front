import axios from "axios";
import { apiHost } from "./configuracao.json";

export default axios.create({
  baseURL: apiHost,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
