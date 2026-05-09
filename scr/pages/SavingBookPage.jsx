import { useEffect, useState } from "react";

import savingBookApi from
"../api/savingBookApi";

import SavingBookForm from
"../components/savingBook/SavingBookForm";

import SavingBookTable from
"../components/savingBook/SavingBookTable";

function SavingBookPage() {

  const [savingBooks, setSavingBooks] =
    useState([]);

  useEffect(() => {
    fetchSavingBooks();
  }, []);

  const fetchSavingBooks =
    async () => {

      try {

        const response =
          await savingBookApi.getAll();

        setSavingBooks(response.data);

      } catch (error) {
        console.log(error);
      }
    };

  const handleAddSavingBook =
    async (data) => {

      try {

        await savingBookApi.create(data);

        fetchSavingBooks();

      } catch (error) {
        console.log(error);
      }
    };

  const handleDelete =
    async (id) => {

      try {

        await savingBookApi.delete(id);

        fetchSavingBooks();

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="container mt-3">

      <h2>Quản lý sổ tiết kiệm</h2>

      <SavingBookForm
        onSubmit={
          handleAddSavingBook
        }
      />

      <hr />

      <SavingBookTable
        savingBooks={savingBooks}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default SavingBookPage;