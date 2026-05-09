import { useState } from "react";

function TransactionForm({ onSubmit }) {
  const [savingBookId, setSavingBookId] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [transactionType, setTransactionType] =
    useState("Deposit");

  const [transactionDate, setTransactionDate] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      savingBookId,
      amount,
      transactionType,
      transactionDate
    });

    setSavingBookId("");
    setAmount("");
    setType("Deposit");
    setTransactionDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ID sổ tiết kiệm"
        value={savingBookId}
        onChange={(e) =>
          setSavingBookId(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Số tiền"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <select
        value={transactionType}
        onChange={(e) =>
          setTransactionType(e.target.value)
        }
      >
        <option value="Deposit">
          Nạp tiền
        </option>

        <option value="Withdraw">
          Rút tiền
        </option>
      </select>

      <input
        type="date"
        value={transactionDate}
        onChange={(e) =>
          setTransactionDate(
            e.target.value
          )
        }
      />

      <button type="submit">
        Thực hiện giao dịch
      </button>
    </form>
  );
}

export default TransactionForm;