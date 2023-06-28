import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amount = transactions.map((transction) => transction.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <>
      <div className="flex justify-between py-3">
        <h4>Income</h4>
        <span>${income}</span>
      </div>
      <div className="flex justify-between py-3">
        <h4>Expense</h4>
        <span>${expense}</span>
      </div>
    </>
  );
}

export default IncomeExpenses;
