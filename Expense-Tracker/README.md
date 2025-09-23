**Expense Tracker Dashboard**
A simple and interactive Expense Tracker built with React, Redux Toolkit (RTK), and React Router, featuring income/expense tracking, charts, authentication, and local storage persistence.

<!-- Features -->

- **Add Income & Expenses**: Record your daily income and expenses.
- **Transaction History**: View all transactions with delete option.
- **Dashboard**: Shows current balance, total income, and total expense.
- **Analytics**: Pie chart showing proportion of income vs expenses.
- **Authentication**: Simple login to access the app.
- **Local Storage**: Transactions and login persist on page reload.
- **Interactive UI**: Clean, responsive, and user-friendly interface.

<!-- Installation -->

- Clone the repository
    git clone https://github.com/your-username/expense-tracker.git
    cd Expense-Tracker
- Install dependencies
    npm install
- Run the application
    npm run dev

<!-- Folder Structure -->
src/
├── components/
│   ├── addTransactions.jsx
│   ├── Dashboard.jsx
│   ├── footer.jsx
│   ├── Navbar.jsx
│   ├── TransactionsList.jsx
│   └── ChartComponent.jsx
├── redux/
│   ├── transactionSlice.js
│   ├── authSlice.js
│   ├── store.js
│   └── localStorage.js
├── App.jsx
└── App.css


<!-- Usage -->

- Login with a username (password is optional for demo purposes).
- Add new transactions by entering description, amount, and type (Income/Expense).
- View transaction history and delete items if needed.
- Monitor your finances with dashboard and pie chart analytics.
- Footer shows current date, time, and motivational thought.

<!-- Technologies Used -->

1) React – Front-end library
2) Redux Toolkit (RTK) – State management
3) React Router – Page navigation
4) Chart.js / react-chartjs-2 – Data visualization
5) UUID – Unique IDs for transactions
6) LocalStorage – Persist data on browser reload

**HAPPY CODING**