function TransactionTable({
  transactions
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>

          <th>ID sổ</th>

          <th>Số tiền</th>

          <th>Loại giao dịch</th>

          <th>Ngày giao dịch</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>

            <td>{item.savingBookId}</td>

            <td>{item.amount}</td>

            <td>{item.transactionType}</td>

            <td>
              {item.transactionDate}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;