import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import transactionHistoryApi from "../../api/transactionHistoryApi";

function TransactionHistoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    savingBookId: "",
    transactionType: "Deposit",
    amount: "",
    transactionDate: "",
    note: "",
  });

  // LOAD DETAIL
  const fetchTransactionHistory = async () => {
    try {
      const response = await transactionHistoryApi.getById(id);

      const data = response.data;

      setFormData({
        savingBookId: data.savingBookId || "",
        transactionType: data.transactionType || "Deposit",
        amount: data.amount || "",
        transactionDate: data.transactionDate
          ? data.transactionDate.slice(0, 16)
          : "",
        note: data.note || "",
      });
    } catch (error) {
      console.error(error);
      alert("Không load được transaction history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactionHistory();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        amount: Number(formData.amount),
        savingBookId: Number(formData.savingBookId),
      };

      await transactionHistoryApi.update(id, payload);

      alert("Cập nhật thành công");

      navigate("/transactionhistory");
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Cập nhật thất bại");
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Edit Transaction History
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* SavingBookId */}
        <div>
          <label>SavingBook ID</label>

          <input
            type="number"
            name="savingBookId"
            value={formData.savingBookId}
            onChange={handleChange}
            placeholder="Nhập SavingBook ID"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Transaction Type */}
        <div>
          <label>Transaction Type</label>

          <select
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          >
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label>Amount</label>

          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Nhập số tiền"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Transaction Date */}
        <div>
          <label>Transaction Date</label>

          <input
            type="datetime-local"
            name="transactionDate"
            value={formData.transactionDate}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Note */}
        <div>
          <label>Note</label>

          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Nhập ghi chú"
            rows={4}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* BUTTON */}
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "10px 18px",
              background: "orange",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Update
          </button>

          <button
            type="button"
            onClick={() => navigate("/transactionhistory")}
            style={{
              padding: "10px 18px",
              background: "#666",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionHistoryEdit;