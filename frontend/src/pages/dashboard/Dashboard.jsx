function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <div style={cardStyle}>
          <h3>Customers</h3>
          <p>Manage all customers</p>
        </div>

        <div style={cardStyle}>
          <h3>Transactions</h3>
          <p>Deposit / Withdraw history</p>
        </div>

        <div style={cardStyle}>
          <h3>Saving Books</h3>
          <p>Manage saving accounts</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  flex: 1,
  padding: 20,
  background: "white",
  borderRadius: 10,
  border: "1px solid #eee",
};

export default Dashboard;