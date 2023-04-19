import React, { useState } from "react";
import "./AddExpense.css";

const AddExpense = (props) => {
  const [EnterText, setEnteredText] = useState("");
  const [EnterAmount, setEnteredAmount] = useState("");
  const [EnterDate, setEnteredDate] = useState("");
  // const[userInput,setUserInput]=useState({EnteredText:'',
  //    EnteredAmount:'',
  //    EnteredDate:''
  // });
  const textInput = (event) => {
    // setUserInput({
    //   ...userInput,
    //   EnteredText:event.target.value,
    // })
    setEnteredText(event.target.value);
    // setUserInput({...userInput,EnteredText:event.target.value});
  };
  const numberInput = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateInput = (event) => {
    event.preventDefault();
    setEnteredDate(event.target.value);
    //console.log(event.target.value);
  };
  const submitHandeler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: EnterText,
      amount: EnterAmount,
      date: new Date(EnterDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredText("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="expense-item" onSubmit={submitHandeler}>
      <div className="expense-item__description">
        <div>
          <label>Add Expense</label>
          <input type="text" value={EnterText} onChange={textInput} />
        </div>
        <div>
          <label>Add amount</label>
          <input
            type="number"
            value={EnterAmount}
            onChange={numberInput}
          ></input>
        </div>
        <div>
          <label>date</label>
          <input type="date" value={EnterDate} onChange={DateInput}></input>
        </div>
        <button>submit</button>
      </div>
    </form>
  );
};
export default AddExpense;
