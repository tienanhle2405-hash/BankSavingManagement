import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import transactionHistoryApi from "../../api/transactionHistoryApi";
import Table from "../../components/common/Table";

function TransactionHistoryList() {
  const [transactionHistories, setTransactionHistories] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await transactionHistoryApi.getAll();
      setTransactionHistories(response.data);
    } catch (error) {
      console.error(error);
      alert("Lỗi load transaction history");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xoá?");

    if (!confirmDelete) return;

    try {
      await transactionHistoryApi.delete(id);
      alert("Xoá thành công");
      fetchData();
    } catch (error) {
      console.error(error);
      alert("Xoá thất bại");
    }
  };

  const columns = [
    {
      label: "ID",
      accessor: "id",
    },
    {
      label: "SavingBook ID",
      accessor: "savingBookId",
    },
    {
      label: "Transaction Type",
      accessor: "transactionType",
    },
    {
      label: "Amount",
      accessor: "amount",
    },
    {
      label: "Transaction Date",
      accessor: "transactionDate",
    },
    {
      label: "Note",
      accessor: "note",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Transaction History List</h2>

        <button
          onClick={() => navigate("/transactionhistory/create")}
          style={{
            padding: "10px 16px",
            background: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Create
        </button>
      </div>

      <Table
        columns={columns}
        data={transactionHistories}
        renderActions={(item) => (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() =>
                navigate(`/transactionhistory/${item.id}`)
              }
            >
              Detail
            </button>

            <button
              onClick={() =>
                navigate(`/transactionhistory/edit/${item.id}`)
              }
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(item.id)}
              style={{ background: "red", color: "white" }}
            >
              Delete
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default TransactionHistoryList;