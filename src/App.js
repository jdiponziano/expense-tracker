import Expenses from './components/organisms/Expenses/Expenses'

const App = () => {
  const expenses = [
    {
      title: 'Car Insurance',
      date: new Date(2021, 2, 28),
      amount: 124.59
    },
    {
      title: 'Dinner',
      date: new Date(2021, 3, 28),
      amount: 56.59
    },
    {
      title: 'Paint Supplies',
      date: new Date(2021, 5, 28),
      amount: 124.59
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  )
}

export default App
