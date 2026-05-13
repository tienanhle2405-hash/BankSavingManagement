import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/*
|--------------------------------------------------------------------------
| Layout
|--------------------------------------------------------------------------
*/
import Layout from "./components/layout/Layout";

/*
|--------------------------------------------------------------------------
| Auth Pages
|--------------------------------------------------------------------------
*/
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/*
|--------------------------------------------------------------------------
| Dashboard
|--------------------------------------------------------------------------
*/
import Dashboard from "./pages/dashboard/Dashboard";

/*
|--------------------------------------------------------------------------
| Customer Pages
|--------------------------------------------------------------------------
*/
import CustomerList from "./pages/customer/CustomerList";
import CustomerCreate from "./pages/customer/CustomerCreate";
import CustomerEdit from "./pages/customer/CustomerEdit";

/*
|--------------------------------------------------------------------------
| SavingBook Pages
|--------------------------------------------------------------------------
*/
import SavingBookList from "./pages/savingbook/SavingBookList";
import SavingBookCreate from "./pages/savingbook/SavingBookCreate";
import SavingBookEdit from "./pages/savingbook/SavingBookEdit";

/*
|--------------------------------------------------------------------------
| Transaction Pages
|--------------------------------------------------------------------------
*/
import TransactionHistoryList from "./pages/transactionHistory/TransactionHistoryList";
import TransactionHistoryCreate from "./pages/transactionHistory/TransactionHistoryCreate";
import TransactionHistoryEdit from "./pages/transactionHistory/TransactionHistoryEdit";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= AUTH ================= */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* ================= MAIN LAYOUT ================= */}
        <Route path="/" element={<Layout />}>
          {/* Dashboard */}
          <Route
            index
            element={<Navigate to="/dashboard" />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          {/* ================= CUSTOMER ================= */}
          <Route
            path="customers"
            element={<CustomerList />}
          />

          <Route
            path="customers/create"
            element={<CustomerCreate />}
          />

          <Route
            path="customers/:id"
            element={<CustomerEdit />}
          />

          {/* ================= SAVINGBOOK ================= */}
          <Route
            path="savingbooks"
            element={<SavingBookList />}
          />

          <Route
            path="savingbooks/create"
            element={<SavingBookCreate />}
          />

          <Route
            path="savingbooks/:id"
            element={<SavingBookEdit />}
          />

          {/* ================= TRANSACTION ================= */}
          <Route
            path="transactions"
            element={<TransactionHistoryList />}
          />

          <Route
            path="transactions/create"
            element={<TransactionHistoryCreate />}
          />

          <Route
            path="transactions/:id"
            element={<TransactionHistoryEdit />}
          />

        </Route>

        {/* ================= NOT FOUND ================= */}
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;