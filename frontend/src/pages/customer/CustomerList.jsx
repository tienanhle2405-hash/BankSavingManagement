import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import customerApi from "../../api/customerApi";
import Table from "../../components/common/Table";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  const fetchCustomers = async () => {
    try {
      const response = await customerApi.getAll();
      setCustomers(response.data);
    } catch (error) {
      console.error(error);
      alert("Không tải được danh sách khách hàng");
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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xoá khách hàng?"
    );

    if (!confirmDelete) return;

    try {
      await customerApi.delete(id);

      alert("Xoá thành công");

      fetchCustomers();
    } catch (error) {
      console.error(error);
      alert("Xoá thất bại");
    }
  };

  const columns = [
    {
      key: "customerId",
      title: "ID",
    },
    {
      key: "fullName",
      title: "Họ tên",
    },
    {
      key: "email",
      title: "Email",
    },
    {
      key: "phoneNumber",
      title: "Số điện thoại",
    },
    {
      key: "address",
      title: "Địa chỉ",
    },
    {
      key: "citizenId",
      title: "CCCD",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2>Danh sách khách hàng</h2>

        <button
          onClick={() => navigate("/customers/create")}
          style={{
            padding: "10px 16px",
            border: "none",
            background: "#1976d2",
            color: "#fff",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Thêm khách hàng
        </button>
      </div>

      <Table
        columns={columns}
        data={customers}
        renderActions={(item) => (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() =>
                navigate(`/customers/edit/${item.customerId}`)
              }
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(item.customerId)}
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default CustomerList;