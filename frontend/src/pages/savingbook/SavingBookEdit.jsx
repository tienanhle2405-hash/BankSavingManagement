import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import savingBookApi from "../../api/savingBookApi";

function SavingBookEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    accountNumber: "",
    customerId: "",
    balance: "",
    interestRate: "",
    termMonths: "",
    status: "ACTIVE",
  });

  /*
  |--------------------------------------------------------------------------
  | Fetch Detail
  |--------------------------------------------------------------------------
  */
  const fetchSavingBook = async () => {
    try {
      setLoading(true);

      const response = await savingBookApi.getById(id);

      const data = response.data;

      setFormData({
        accountNumber: data.accountNumber || "",
        customerId: data.customerId || "",
        balance: data.balance || "",
        interestRate: data.interestRate || "",
        termMonths: data.termMonths || "",
        status: data.status || "ACTIVE",
      });
    } catch (error) {
      console.error(error);

      alert("Không thể tải dữ liệu SavingBook");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavingBook();
  }, [id]);

  /*
  |--------------------------------------------------------------------------
  | Handle Change
  |--------------------------------------------------------------------------
  */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /*
  |--------------------------------------------------------------------------
  | Submit Update
  |--------------------------------------------------------------------------
  */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await savingBookApi.update(id, {
        accountNumber: formData.accountNumber,
        customerId: Number(formData.customerId),
        balance: Number(formData.balance),
        interestRate: Number(formData.interestRate),
        termMonths: Number(formData.termMonths),
        status: formData.status,
      });

      alert("Cập nhật SavingBook thành công");

      navigate("/savingbooks");
    } catch (error) {
      console.error(error);

      alert("Cập nhật thất bại");
    }
  };

  if (loading) {
    return (
      <div
        style={{
          padding: "30px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            marginBottom: "24px",
          }}
        >
          Edit SavingBook
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Account Number */}
          <div style={formGroup}>
            <label style={labelStyle}>
              Account Number
            </label>

            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Customer ID */}
          <div style={formGroup}>
            <label style={labelStyle}>
              Customer ID
            </label>

            <input
              type="number"
              name="customerId"
              value={formData.customerId}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Balance */}
          <div style={formGroup}>
            <label style={labelStyle}>
              Balance
            </label>

            <input
              type="number"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Interest Rate */}
          <div style={formGroup}>
            <label style={labelStyle}>
              Interest Rate (%)
            </label>

            <input
              type="number"
              step="0.1"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Term Months */}
          <div style={formGroup}>
            <label style={labelStyle}>
              Term Months
            </label>

            <input
              type="number"
              name="termMonths"
              value={formData.termMonths}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Status */}
          <div style={formGroup}>
            <label style={labelStyle}>
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="ACTIVE">
                ACTIVE
              </option>

              <option value="CLOSED">
                CLOSED
              </option>
            </select>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "24px",
            }}
          >
            <button
              type="submit"
              style={{
                ...buttonStyle,
                background: "#2563eb",
              }}
            >
              Update
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/savingbooks")
              }
              style={{
                ...buttonStyle,
                background: "#64748b",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const formGroup = {
  marginBottom: "18px",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
};

export default SavingBookEdit;