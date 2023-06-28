import { useGlobalState } from "../../context/GlobalState";
import TransacrionItem from "./TransacrionItem";

function TransactionList() {
  const { transactions } = useGlobalState();
  return (
    <div>
      <h3 className="text-slate-300 text-xl font-bold py-2">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransacrionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
