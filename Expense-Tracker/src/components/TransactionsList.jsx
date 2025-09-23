import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/transactionSlice";
import "../App.css"; // make sure CSS is imported

const TransactionList = () => {
  const transactions = useSelector(state => state.transactions.transactions);
  const dispatch = useDispatch();

  return (
    <div className="history-container">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {transactions.map(t => (
          <li key={t.id} className="transaction-item">
            <span className="transaction-text">{t.text}</span>
            <span className="transaction-amount">{t.amount}</span>
            <button
              className="delete-button"
              onClick={() => dispatch(deleteTransaction(t.id))}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
