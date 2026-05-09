import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import savingBookApi from "../../api/savingBookApi";
import {FormatMoney} from "../../utils/FormatMoney";
import {FormatDate} from "../../utils/FormatDate";
function SavingBookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      setLoading(true);
      const res = await savingBookApi.getById(id);
      setBook(res.data);
    } catch (err) {
      console.log("Error loading saving book:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h3>Loading...</h3>;

  if (!book) return <h3>No data found</h3>;

  return (
    <div style={containerStyle}>
      <h2>Saving Book Detail</h2>

      <div style={cardStyle}>
        <p><b>Book Number:</b> {book.bookNumber}</p>
        <p><b>Customer ID:</b> {book.customerId}</p>
        <p><b>Balance:</b> {FormatMoney(book.balance)}</p>
        <p><b>Interest Rate:</b> {book.interestRate}%</p>
        <p><b>Term:</b> {book.termMonth} months</p>
        <p><b>Open Date:</b> {FormatDate(book.openDate)}</p>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: 20,
};

const cardStyle = {
  marginTop: 20,
  padding: 20,
  background: "white",
  borderRadius: 10,
  border: "1px solid #ddd",
  width: 400,
};

export default SavingBookDetail;