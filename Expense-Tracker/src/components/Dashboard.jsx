import React from "react";
import { useSelector } from "react-redux";
import "../App.css"; 

const Dashboard = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const amounts = transactions.map((t) => t.amount);

  const income = amounts.filter((a) => a > 0).reduce((a, b) => a + b, 0);
  const expense = amounts.filter((a) => a < 0).reduce((a, b) => a + b, 0);
  const balance = income + expense;

  return (
    <div className="dashboard-container">
      <h3>Your Balance: ${balance}</h3>
      <div className="dashboard-cards">
        <div className="income-card">
          <h4>Income</h4>
          <p>${income}</p>
        </div>
        <div className="expense-card">
          <h4>Expense</h4>
          <p>${Math.abs(expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
