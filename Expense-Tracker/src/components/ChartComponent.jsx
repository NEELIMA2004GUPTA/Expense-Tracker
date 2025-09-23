import React from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../App.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const amounts = transactions.map((t) => t.amount);
  const income = amounts.filter((a) => a > 0).reduce((a, b) => a + b, 0);
  const expense = Math.abs(amounts.filter((a) => a < 0).reduce((a, b) => a + b, 0));

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount",
        data: [income, expense],
        backgroundColor: ["#2ecc71", "#e74c3c"],
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
  };

  return (
    <div className="chart-container-small">
      <h3>Expense vs Income</h3>
      <div className="pie-wrapper">
        <Pie data={data} options={options} height={250} width={250}/>
      </div>
    </div>
  );
};

export default ChartComponent;
