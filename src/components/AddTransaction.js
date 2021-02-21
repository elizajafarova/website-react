import React, { useState, useContext } from "react";
import { GlobalContext } from "../components/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form className="form-tr" onSubmit={onSubmit}>
        <div className="form-control">
          <label className="trans" htmlFor="text">
            Text
          </label>
          <input
            className="textt"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label className="trans" htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            className="num"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn-trc">Add transaction</button>
      </form>
    </>
  );
};
