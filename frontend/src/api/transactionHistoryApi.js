import axiosClient from "./axiosClient";

const transactionHistoryApi = {
  // GET ALL
  getAll: () => axiosClient.get("/transactionhistory"),

  // GET BY ID
  getById: (id) => axiosClient.get(`/transactionhistory/${id}`),

  // CREATE
  create: (data) => axiosClient.post("/transactionhistory", data),

  // UPDATE
  update: (id, data) =>
    axiosClient.put(`/transactionhistory/${id}`, data),

  // DELETE
  delete: (id) => axiosClient.delete(`/transactionhistory/${id}`),
};

export default transactionHistoryApi;