import axios from "axios";

type UserPayload = {
  name: string;
  surname: string;
  email: string;
};

const API_URL = "https://63287396cc4c264fdedbade0.mockapi.io/";

const getUsers = () =>
  axios.get(`${API_URL}/users`).then((response) => response.data);

const postUser = ({ name, surname, email }: UserPayload) =>
  axios.post(`${API_URL}/users`, { name: name, surname: surname, email });

export { getUsers, postUser, UserPayload };
