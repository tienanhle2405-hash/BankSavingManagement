import { useState } from "react";

function SavingBookForm({ onSubmit }) {
  const [customerId, setCustomerId] = useState("");
  const [bookNumber, setBookNumber] = useState("");
  const [balance, setBalance] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [termMonths, setTermMonths] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [Status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      customerId,
      bookNumber,
      balance,
      interestRate,
      termMonths,
      openDate,
      Status
    });

    setCustomerId("");
    setBookNumber("");
    setBalance("");
    setInterestRate("");
    setTermMonths("");
    setOpenDate("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ID khách hàng"
        value={customerId}
        onChange={(e) =>
          setCustomerId(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Số sổ"
        value={bookNumber}
        onChange={(e) =>
          setBookNumber(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Số dư"
        value={balance}
        onChange={(e) =>
          setBalance(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Lãi suất"
        value={interestRate}
        onChange={(e) =>
          setInterestRate(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Kỳ hạn"
        value={termMonths}
        onChange={(e) =>
          setTermMonths(e.target.value)
        }
      />

      <input
        type="date"
        value={openDate}
        onChange={(e) =>
          setOpenDate(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Trạng thái"
        value={Status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      />

      <button type="submit">
        Thêm sổ tiết kiệm
      </button>
    </form>
  );
}

export default SavingBookForm;