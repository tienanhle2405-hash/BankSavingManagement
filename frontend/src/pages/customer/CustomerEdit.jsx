import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import customerApi from "../../api/customerApi";

function CustomerEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    citizenId: "",
  });

  const fetchCustomer = async () => {
    try {
      const response = await customerApi.getById(id);

      setFormData(response.data);
    } catch (error) {
      console.error(error);
      alert("Không tải được khách hàng");
    }
  };

  useEffect(() => {
  const load = () => {
    fetchCustomers();
  };

  load();

  const interval = setInterval(load, 5000);

  return () => clearInterval(interval);
}, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await customerApi.update(id, formData);

      alert("Cập nhật thành công");

      navigate("/customers");
    } catch (error) {
      console.error(error);
      alert("Cập nhật thất bại");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cập nhật khách hàng</h2>

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
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default CustomerEdit;