import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/transactionSlice";
import "../App.css";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income"); 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const finalAmount = type === "income" ? Number(amount) : -Number(amount);

    dispatch(addTransaction({ text, amount: finalAmount }));

    setText("");
    setAmount("");
    setType("income");
  };

  return (
    <div className="form-container">
      <h2>ADD NEW TRANSACTION</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Description"
          className="input-field"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          className="input-field"
        />

        
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="input-field"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button type="submit" className="add-button">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;

