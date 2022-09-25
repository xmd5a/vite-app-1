import axios from "axios";
import { UserPayload } from "./types";

const API_URL = "/api";

const getUsers = () =>
  axios.get(`${API_URL}/users`).then((response) => response.data);

const postUser = ({ name, surname, email }: UserPayload) =>
  axios.post(`${API_URL}/users`, { name: name, surname: surname, email });

export { getUsers, postUser };
