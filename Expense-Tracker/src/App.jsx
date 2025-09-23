import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AddTransaction from "./components/addTransactions.jsx";
import TransactionList from "./components/TransactionsList.jsx";
import ChartComponent from "./components/ChartComponent.jsx";
import Login from "./components/Login.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/"
            element={isAuthenticated ? (
              <>
                <Dashboard />
                <ChartComponent />
              </>
            ) : (
              <Navigate to="/login" />
            )}
          />
          <Route
            path="/add"
            element={isAuthenticated ? <AddTransaction /> : <Navigate to="/login" />}
          />
          <Route
            path="/history"
            element={isAuthenticated ? <TransactionList /> : <Navigate to="/login" />}
          />
        </Routes>
      <Footer />
      </div>
    </Router>
    
  );
};

export default App;
