import { useState } from "react";
import transactionApi from "../../api/transactionApi";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function Deposit() {
  const [form, setForm] = useState({
    accountId: "",
    amount: 0,
  });

  const handleSubmit = async () => {
    await transactionApi.deposit(form);
    alert("Deposit success");
  };

  return (
    <div>
      <h2>Deposit</h2>

      <Input
        label="Account ID"
        value={form.accountId}
        onChange={(e) => setForm({ ...form, accountId: e.target.value })}
      />

      <Input
        label="Amount"
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <Button onClick={handleSubmit}>Deposit</Button>
    </div>
  );
}

export default Deposit;