import React, { useState } from "react";
import AddExpense from "./addExpense";

const NewExpense = (props) => {
  const [isEditing, SetEditing] = useState(false);
  const onSaveExpenseDataHandler = (EnterdExpenseData) => {
    const expenseData = {
      ...EnterdExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };
  const startEditingHandler = () => {
    SetEditing(true);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <AddExpense onSaveExpenseData={onSaveExpenseDataHandler} />}
    </div>
  );
};
export default NewExpense;
