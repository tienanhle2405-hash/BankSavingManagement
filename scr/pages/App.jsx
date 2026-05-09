import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import CustomerPage from
"./pages/CustomerPage";

import SavingBookPage from
"./pages/SavingBookPage";

import TransactionPage from
"./pages/TransactionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/customers"
          element={<CustomerPage />}
        />

        <Route
          path="/savingbooks"
          element={<SavingBookPage />}
        />

        <Route
          path="/transactions"
          element={<TransactionPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;