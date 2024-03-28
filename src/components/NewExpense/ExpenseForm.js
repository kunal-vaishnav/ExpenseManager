export default function ExpenseForm() {
  return (
    <form>
      <div className="new-expense">
        <div className="new-expense">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense">
          <label>Amount</label>
          <input type="text" min="0.01" step="0.01" />
        </div>
        <div className="new-expense">
          <label>Date</label>
          <input type="text" min="2019-01-01" max="2024-12-06" />
        </div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
