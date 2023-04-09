import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
 function ExpenseItem(props){

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title}/>
            <ExpenseDetails location={props.location}/>
            <ExpenseDetails amount={props.amount}/>
        </div>
    )
            
 }
 export default ExpenseItem;