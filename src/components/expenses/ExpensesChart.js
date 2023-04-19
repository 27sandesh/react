import React from "react";
import Chart from "../chart/chart";
const ExpenseChart = (props) => {
  const ChartDataPoints = [
    { label: "jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "Aug", value: 0 },
    { label: "sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of props.expenses) {
    const expensesMonth = expense.date.getMonth();
    ChartDataPoints[expensesMonth] += expense.amount;
  }
  return <Chart DataPoints={ChartDataPoints} />;
};
export default ExpenseChart;
