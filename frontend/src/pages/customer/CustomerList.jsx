import { useEffect, useState } from "react";
import customerApi from "../../api/customerApi";
import Table from "../../components/common/Table";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await customerApi.getAll();
    setCustomers(res.data);
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Full Name", dataIndex: "fullName" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Address", dataIndex: "address" },
  ];

  return (
    <div>
      <h2>Customer List</h2>
      <Table columns={columns} data={customers} />
    </div>
  );
}

export default CustomerList;