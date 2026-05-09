import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const { user, logout } = useAuthContext();

  return (
    <div style={headerStyle}>
      {title && <h2 style={{ margin: 0 }}>{title}</h2>}
      <div style={{ fontWeight: "bold", fontSize: 18 }}>
        Bank Saving Management
      </div>

      {title && <div style={{ flex: 1 }}></div>}
      <div style={rightStyle}>
        <span style={{ color: "#555" }}>
          Hello, <b>{user?.name || "User"}</b>
        </span>

        <div style={avatarStyle}>
          {user?.name ? user.name.charAt(0) : "U"}
        </div>

        <button onClick={handleLogout} style={logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;