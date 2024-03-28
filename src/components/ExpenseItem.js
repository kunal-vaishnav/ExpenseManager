import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Ui/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  //with to toLocaleString we can date format like
  // english us great britain we can set month:long year:numeric
  // 2digit long
  // <div> {props.date.toISOString()}</div>
  // with the help we can set the normal date formart
  const onchange = () => {
    setTitle("Updated");

    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{title} </h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={onchange}>click</button>
    </Card>
  );
}
export default ExpenseItem;
