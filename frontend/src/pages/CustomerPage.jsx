import { useEffect, useState } from "react";

import customerApi from "../api/customerApi";

import CustomerForm from
"../components/customer/CustomerForm";

import CustomerTable from
"../components/customer/CustomerTable";

function CustomerPage() {

  const [customers, setCustomers] =
    useState([]);

  // GET ALL
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {

    try {

      const response =
        await customerApi.getAll();

      setCustomers(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  // CREATE
  const handleAddCustomer =
    async (data) => {

      try {

        await customerApi.create(data);

        fetchCustomers();

      } catch (error) {
        console.log(error);
      }
    };

  // DELETE
  const handleDelete =
    async (id) => {

      try {

        await customerApi.delete(id);

        fetchCustomers();

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="container mt-3">

      <h2>Quản lý khách hàng</h2>

      <CustomerForm
        onSubmit={handleAddCustomer}
      />

      <hr />

      <CustomerTable
        customers={customers}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default CustomerPage;