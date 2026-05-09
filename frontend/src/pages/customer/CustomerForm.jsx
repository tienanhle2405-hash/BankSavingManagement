import { useState } from "react";
import customerApi from "../../api/customerApi";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function CustomerForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    cccd: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await customerApi.create(form);
    alert("Created successfully!");
  };

  return (
    <div>
      <h2>Create Customer</h2>

      <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} />
      <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
      <Input label="CCCD" name="cccd" value={form.cccd} onChange={handleChange} />
      <Input label="Address" name="address" value={form.address} onChange={handleChange} />

      <Button onClick={handleSubmit}>Create</Button>
    </div>
  );
}

export default CustomerForm;