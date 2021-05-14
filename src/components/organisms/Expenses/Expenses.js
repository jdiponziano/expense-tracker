import ExpenseItem from '../../molecules/ExpenseItem/ExpenseItem'
import './Expenses.css'

const Expenses = ({ items }) => {
  return (
    <div className='expenses'>
      {items.map(item => {
        return (
          <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        )
      })}
    </div>
  )
}

export default Expenses
