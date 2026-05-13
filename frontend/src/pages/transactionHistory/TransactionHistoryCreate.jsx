import { useState } from "react";
import transactionHistoryApi from "../../api/transactionHistoryApi";
import { useNavigate } from "react-router-dom";
function TransactionHistoryCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    savingBookId: "",
  transactionType: "Deposit",
    amount: "",
    transactionDate: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await transactionHistoryApi.create(formData);
      alert("Tạo transaction history thành công");
      navigate("/transactionhistory");
    } catch (error) {
      console.error(error);
      alert("Tạo thất bại");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Transaction History</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          maxWidth: "500px",
        }}
      >
        <input
          type="number"
          name="savingBookId"
          placeholder="SavingBook ID"
          value={formData.savingBookId}
          onChange={handleChange}
          required
        />

        <select
          name="transactionType"
          value={formData.transactionType}
          onChange={handleChange}
        >
          <option value="Deposit">Deposit</option>
          <option value="Withdraw">Withdraw</option>
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <input
          type="datetime-local"
          name="transactionDate"
          value={formData.transactionDate}
          onChange={handleChange}
          required
        />

        <textarea
          name="note"
          placeholder="Note"
          value={formData.note}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default TransactionHistoryCreate;