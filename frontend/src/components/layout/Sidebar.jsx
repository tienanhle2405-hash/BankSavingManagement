// src/components/layout/Sidebar.jsx
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Wallet,
  ReceiptText,
  History,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: <Users size={20} />,
  },
  {
    name: "Saving Books",
    path: "/savingbooks",
    icon: <Wallet size={20} />,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: <ReceiptText size={20} />,
  },
  {
    name: "Transaction History",
    path: "/transactionhistory",
    icon: <History size={20} />,
  },
];

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="w-[250px] h-screen bg-blue-900 text-white fixed left-0 top-0 shadow-lg">
      <div className="p-6 border-b border-blue-700">
        <h1 className="text-2xl font-bold">Saving Bank</h1>
        <p className="text-sm text-gray-300 mt-1">
          Management System
        </p>
      </div>

      <div className="flex flex-col p-4 gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
              ${
                isActive
                  ? "bg-white text-blue-900 font-semibold"
                  : "hover:bg-blue-700"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="absolute bottom-0 w-full p-4 border-t border-blue-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-lg transition-all"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;