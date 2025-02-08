import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const response = await axios.get(`${URL}/users`);
  return response.data;
};

export const getTodos = async () => {
  const response = await axios.get(`${URL}/todos`);
  return response.data;
};
