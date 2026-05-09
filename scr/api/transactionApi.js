import axiosClient from "./axiosClient";

const transactionApi = {
  deposit: (data) => {
    return axiosClient.post("/transactions/deposit", data);
  },

  withdraw: (data) => {
    return axiosClient.post("/transactions/withdraw", data);
  },

  getHistory: () => {
    return axiosClient.get("/transactions");
  }
};

export default transactionApi;