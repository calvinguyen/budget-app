import ExpenseItem from './ExpenseItem';

const Table = ({ expenses, showBudget = true }) => {
  const budget = showBudget ? 'Budget' : '';

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {['Name', 'Amount', 'Date', budget, ''].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
