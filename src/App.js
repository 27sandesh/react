
import './App.css';
import ExpenseItem from './components/expenses/ExpenseItems';
const app=()=>{
  const expenses=[
    {
    id:'el',
    title:'Title Paper',
    amount:23,
    date:new Date(2022, 7, 14),
    location:'new York',
  },
  {
    id:'el1',
    title:'New Tv',
    amount:799,
    date:new Date(2022, 8, 14),
    location:'LA',
  },
  {
    id:'el2',
    title:'Car Insurance',
    amount:25,
    date:new Date(2022, 9, 14),
    location:'UK',
  },
  {
    id:'el3',
    title:'food',
    amount:30,
    date:new Date(2022, 4, 14),
    location:'UAE',
  },
]
return (
  <div>
    <h2>Lets get started with react</h2>
    <p>this is also visible</p>
  {
    expenses.map((props)=>(
      <ExpenseItem 
      key={props.id}
      title={props.title}
      amount={props.amount}
      date={props.date}
      location={props.location}></ExpenseItem>
    ))
  }
  </div>
);

}

export default app;
