import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import CustomerList from "../pages/customer/CustomerList";
import Deposit from "../pages/transaction/Deposit";
import Withdraw from "../pages/transaction/Withdraw";
import History from "../pages/transaction/History";

function AppRoutes() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />

      {/* Main Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="history" element={<History />} />
        <Route path="saving-books/:id" element={<SavingBookDetail />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;