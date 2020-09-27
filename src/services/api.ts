import axios from "axios";

export const fetchTodos = async () => {
  try {
    return axios.get(
      "https://run.mocky.io/v3/e3c53a50-ad4f-46a7-9058-9b4247a0cf04"
    );
  } catch (error) {
    return error;
  }
};
