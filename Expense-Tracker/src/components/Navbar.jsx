import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import "../App.css";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Expense Tracker</h2>
      <div className="nav-links">
        {isAuthenticated ? (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/add">Add Transaction</Link>
            <Link to="/history">Transaction History</Link>
            <button
              onClick={() => dispatch(logout())}
              className="delete-button"
              style={{ marginLeft: "10px" }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


