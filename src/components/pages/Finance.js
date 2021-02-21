import React from "react";
import Balance from "../Balance";
import "./Balance.css";
import IncomeExpenses from "../IncomeExpenses";
import { TransactionList } from "../TransactionList";
import { AddTransaction } from "../AddTransaction";
import { GlobalProvider } from "../GlobalState";

function Blogs() {
  return (
    <GlobalProvider>
      <div className="body">
        <div className="tracker-container">
          <h2 className="extc">Expense Tracker</h2>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}
export default Blogs;
