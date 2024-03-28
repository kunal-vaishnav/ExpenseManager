import Expense from "./components/Expense.js";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense.js";
//import "./styles.css";
//import ExpenseItem from "./ExpenseItem.js";
// if we donot have components we can simply import it
const Allexpenses = [
  {
    id: "e1",
    title: "car insurane",
    amount: 294.57,
    date: new Date(2024, 3, 5),
  },
  {
    id: "e2",
    title: "health insurane",
    amount: 40.67,
    date: new Date(2024, 2, 4),
  },
  {
    id: "e3",
    title: "income tax",
    amount: 30000,
    date: new Date(2024, 2, 3),
  },

  { id: "e4", title: "rent", amount: 1000, date: new Date(2024, 1, 1) },
];

export default function App() {
  const [expenses, setExpenses] = useState(Allexpenses);

  const loaddatahandler = (expense) => {
    setExpenses((prevexpense) => {
      return [expense, ...prevexpense];
    });
    // console.log(ex);
  };
  return (
    <div>
      <NewExpense AddData={loaddatahandler} />
      <Expense items={expenses} />
    </div>
  );
}
