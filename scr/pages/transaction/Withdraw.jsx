import { useState } from "react";
import transactionApi from "../../api/transactionApi";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function Withdraw() {
  const [form, setForm] = useState({
    accountId: "",
    amount: 0,
  });

  const handleSubmit = async () => {
    await transactionApi.withdraw(form);
    alert("Withdraw success");
  };

  return (
    <div>
      <h2>Withdraw</h2>

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

      <Button onClick={handleSubmit}>Withdraw</Button>
    </div>
  );
}

export default Withdraw;