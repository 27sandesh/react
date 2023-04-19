import ExpenseItem from "./ExpenseItems";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">found no expenses.</h2>;
  }
  return (
    <ul className="expense-list">
      {props.items.map((el) => (
        //{expenses.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
          location={el.location}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpenseList;
