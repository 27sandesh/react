import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
 const ExpenseItem=(props)=>{
    const deletebtn=()=>{
        const ExpenseItem=document.getElementsByClassName('expense-item__description')[0];
        ExpenseItem.remove();
    }
  


    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title}/>
            <ExpenseDetails location={props.location}/>
            <ExpenseDetails amount={props.amount}/>
            <button onClick={deletebtn}>delete</button>
        </div>
    )
            
 }
 export default ExpenseItem;