import "./App.css";
import React, { useState } from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import Filter from "./components/filter.js/filterItem";
import NewExpense from "./components/expenses/addexpense/newExpense";
import ExpenseChart from "./components/expenses/ExpensesChart";
const DUMMY_EXPENSES = [
  {
    id: "el",
    title: "Title Paper",
    amount: 23,
    date: new Date(2022, 7, 14),
    location: "new York",
  },
  {
    id: "el1",
    title: "New Tv",
    amount: 799,
    date: new Date(2022, 8, 14),
    location: "LA",
  },
  {
    id: "el2",
    title: "Car Insurance",
    amount: 25,
    date: new Date(2022, 9, 14),
    location: "UK",
  },
  {
    id: "el3",
    title: "food",
    amount: 30,
    date: new Date(2022, 4, 14),
    location: "UAE",
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [selectedYear, setSeletedYear] = useState("");
  const AddExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  const filterChangeHandler = (year) => {
    setSeletedYear(year);
  };
  let filteredExpenses = expenses;
  if (selectedYear) {
    filteredExpenses = expenses.filter(
      (expense) => expense.date.getFullYear() === +selectedYear
    );
  }

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <Filter onFilterChange={filterChangeHandler} />
      <ExpenseList items={filteredExpenses} />
    </div>
  );
};

export default App;
