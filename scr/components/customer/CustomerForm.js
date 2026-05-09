import { useState } from "react";

function CustomerForm({ onSubmit }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [cccd, setCccd] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      fullName,
      phone,
      cccd,
      address
    });

    // Reset form
    setFullName("");
    setPhone("");
    setCccd("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Họ tên"
        value={fullName}
        onChange={(e) =>
          setFullName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Số điện thoại"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="CCCD"
        value={cccd}
        onChange={(e) =>
          setCccd(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Địa chỉ"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      <button type="submit">
        Thêm khách hàng
      </button>
    </form>
  );
}

export default CustomerForm;