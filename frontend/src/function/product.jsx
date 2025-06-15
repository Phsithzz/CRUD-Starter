import axios from "axios";

export const getData = async () => {
  return await axios.get(import.meta.env.VITE_API_URL + "/product");
};

export const create = async (form) => {
  return await axios.post(import.meta.env.VITE_API_URL + "/product", form);
};

export const remove = async (id) => {
  return await axios.delete(import.meta.env.VITE_API_URL + "/product/" + id);
};

export const read = async (id) => {
  return await axios.get(import.meta.env.VITE_API_URL + "/product/" + id);
};

export const update = async (id, form) => {
  return await axios.put(import.meta.env.VITE_API_URL + "/product/" + id, form);
};
