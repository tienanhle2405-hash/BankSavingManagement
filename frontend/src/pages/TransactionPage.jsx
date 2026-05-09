import { useEffect, useState } from "react";

import transactionApi from
"../api/transactionApi";

import TransactionForm from
"../components/layout/TransactionForm";

import TransactionTable from
"../components/layout/TransactionTable";

function TransactionPage() {

  const [transactions, setTransactions] =
    useState([]);

  // LOAD HISTORY
  useEffect(() => {
    fetchTransactions();
  }, []);

  // GET HISTORY
  const fetchTransactions =
    async () => {

      try {

        const response =
          await transactionApi.getHistory();

        setTransactions(response.data);

      } catch (error) {
        console.log(error);
      }
    };

  // CREATE TRANSACTION
  const handleTransaction =
    async (data) => {

      try {

        // NẠP TIỀN
        if (data.type === "Deposit") {

          await transactionApi.deposit(data);

        }

        // RÚT TIỀN
        else if (
          data.type === "Withdraw"
        ) {

          await transactionApi.withdraw(data);
        }

        // reload history
        fetchTransactions();

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="container mt-3">

      <h2>Quản lý giao dịch</h2>

      <TransactionForm
        onSubmit={handleTransaction}
      />

      <hr />

      <TransactionTable
        transactions={transactions}
      />

    </div>
  );
}

export default TransactionPage;