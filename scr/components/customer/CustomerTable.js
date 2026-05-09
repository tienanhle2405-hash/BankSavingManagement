function CustomerTable({ customers }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Họ tên</th>
          <th>SĐT</th>
          <th>CCCD</th>
          <th>Địa chỉ</th>
          <th>Hành động</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>

            <td>{customer.fullName}</td>

            <td>{customer.phone}</td>

            <td>{customer.cccd}</td>

            <td>{customer.address}</td>

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

export default CustomerTable;