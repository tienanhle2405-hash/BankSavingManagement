import { useEffect, useState } from "react";
import savingBookApi from "../../api/savingBookApi";
import Table from "../../components/common/Table";

function SavingBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await savingBookApi.getAll();
    setBooks(res.data);
  };

  const columns = [
    { title: "Book Number", dataIndex: "bookNumber" },
    { title: "Balance", dataIndex: "balance" },
    { title: "Interest Rate", dataIndex: "interestRate" },
    { title: "Term (months)", dataIndex: "termMonth" },
  ];

  return (
    <div>
      <h2>Saving Books</h2>
      <Table columns={columns} data={books} />
    </div>
  );
}

export default SavingBookList;