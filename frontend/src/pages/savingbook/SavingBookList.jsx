import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import savingBookApi from "../../api/savingBookApi";

import Table from "../../components/common/Table";
import Button from "../../components/common/Button";

function SavingBookList() {
  const [savingBooks, setSavingBooks] = useState([]);

  const navigate = useNavigate();

  const fetchSavingBooks = async () => {
    try {
      const response = await savingBookApi.getAll();

      setSavingBooks(response.data);
    } catch (error) {
      console.error(error);
      alert("Không thể tải dữ liệu savingbook");
    }
  };

  useEffect(() => {
  const loadData = () => {
    fetchSavingBook();
  };

  loadData(); // chạy lần đầu

  const interval = setInterval(loadData, 5000); // 5 giây update 1 lần

  return () => clearInterval(interval);
}, [id]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xoá sổ tiết kiệm này?"
    );

    if (!confirmDelete) return;

    try {
      await savingBookApi.delete(id);

      alert("Xoá thành công");

      fetchSavingBooks();
    } catch (error) {
      console.error(error);
      alert("Xoá thất bại");
    }
  };

  const columns = [
    {
      key: "id",
      title: "ID",
    },
    {
      key: "accountNumber",
      title: "Account Number",
    },
    {
      key: "customerId",
      title: "Customer ID",
    },
    {
      key: "balance",
      title: "Balance",
    },
    {
      key: "interestRate",
      title: "Interest Rate",
    },
    {
      key: "termMonths",
      title: "Term Months",
    },
    {
      key: "status",
      title: "Status",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>SavingBook Management</h2>

        <Button color="green" onClick={() => navigate("/savingbooks/create")}>
          Create SavingBook
        </Button>
      </div>

      <Table
        columns={columns}
        data={savingBooks}
        renderActions={(item) => (
          <>
            <Button
              color="orange"
              onClick={() => navigate(`/savingbooks/${item.id}`)}
            >
              Detail
            </Button>

            <Button
              color="red"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </Button>
          </>
        )}
      />
    </div>
  );
}

export default SavingBookList;