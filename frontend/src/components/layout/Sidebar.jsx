import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: 220, background: "#1f2937", color: "white", height: "100vh", padding: 20 }}>
      <h3>Bank System</h3>

      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/deposit">Deposit</Link></li>
        <li><Link to="/withdraw">Withdraw</Link></li>
        <li><Link to="/history">History</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;