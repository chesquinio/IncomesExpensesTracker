import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className="flex justify-between">
      <h2>Your Balance</h2>
      <h4 className="text-2x1 font-bold">${total}</h4>
    </div>
  );
}

export default Balance;
