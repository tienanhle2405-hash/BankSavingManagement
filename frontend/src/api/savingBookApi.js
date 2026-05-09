import axiosClient from "./axiosClient";

const savingBookApi = {
  getAll: () => axiosClient.get("/savingbooks"),

  getById: (id) => axiosClient.get(`/savingbooks/${id}`),

  getByCustomer: (customerId) =>
    axiosClient.get(`/savingbooks/customer/${customerId}`),

  create: (data) =>
    axiosClient.post("/savingbooks", data),

  update: (id, data) =>
    axiosClient.put(`/savingbooks/${id}`, data),

  delete: (id) =>
    axiosClient.delete(`/savingbooks/${id}`)
};

export default savingBookApi;