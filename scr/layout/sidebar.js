import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-light p-3 vh-100">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/customers">Khách hàng</Link>
        </li>

        <li>
          <Link to="/savingbooks">Sổ tiết kiệm</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;