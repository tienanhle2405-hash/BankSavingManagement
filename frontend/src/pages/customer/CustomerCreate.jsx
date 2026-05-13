import { useState } from "react";
import { useNavigate } from "react-router-dom";

import customerApi from "../../api/customerApi";

function CustomerCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    citizenId: "",
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
      await customerApi.create(formData);

      alert("Thêm khách hàng thành công");

      navigate("/customers");
    } catch (error) {
      console.error(error);
      alert("Thêm thất bại");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thêm khách hàng</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          name="fullName"
          placeholder="Họ tên"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Số điện thoại"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Địa chỉ"
          value={formData.address}
          onChange={handleChange}
        />

        <input
          type="text"
          name="citizenId"
          placeholder="CCCD"
          value={formData.citizenId}
          onChange={handleChange}
        />

        <button type="submit">
          Thêm khách hàng
        </button>
      </form>
    </div>
  );
}

export default CustomerCreate;