import { useEffect, useState } from "react";
import transactionApi from "../../api/transactionApi";
import Table from "../../components/common/Table";

function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await transactionApi.getHistory();
    setData(res.data);
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Type", dataIndex: "type" },
    { title: "Amount", dataIndex: "amount" },
    { title: "Date", dataIndex: "createdAt" },
  ];

  return (
    <div>
      <h2>Transaction History</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default History;