function SavingBookTable({ savingBooks }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>ID khách hàng</th>
          <th>Số sổ</th>
          <th>Số dư</th>
          <th>Lãi suất</th>
          <th>Kỳ hạn</th>
          <th>Ngày mở</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>

      <tbody>
        {savingBooks.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>

            <td>{book.customerId}</td>

            <td>{book.bookNumber}</td>

            <td>{book.balance}</td>

            <td>{book.interestRate}</td>

            <td>{book.termMonths}</td>

            <td>{book.openDate}</td>

            <td>{book.status}</td>

            <td>
              <button className="btn btn-danger me-2">
                Xóa
              </button>

              <button className="btn btn-primary">
                Sửa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SavingBookTable;