import React, { useState } from "react";

import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./card";
const ExpenseItem = (props) => {
  //const [title, setTitle] = useState(props.title);
  const [amount, SetAmount] = useState(props.amount);
  // let title=props.title;
  const clickHandeler = () => {
    //etTitle("updated");
    //console.log(title);
    SetAmount("100");
    console.log(amount);
  };

  //    const deleteb=()=>{
  //         const ExpenseItem=document.getElementsByClassName('expense-item')[0];
  //         ExpenseItem.remove();
  //     }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={amount}
      />
      <button onClick={clickHandeler}>change title </button>
    </Card>
  );
};
export default ExpenseItem;
