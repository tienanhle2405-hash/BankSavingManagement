// src/components/layout/Header.jsx
import { Bell, Search, UserCircle } from "lucide-react";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="h-[70px] bg-white shadow-sm flex items-center justify-between px-6">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Bank Saving Management
        </h2>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg w-[300px]">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell className="text-gray-600" size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <UserCircle size={35} className="text-blue-700" />

          <div>
            <p className="font-semibold text-gray-700">
              {user?.username || "Admin"}
            </p>

            <p className="text-sm text-gray-500">
              {user?.role || "Manager"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;