import { useGlobalState } from "../../context/GlobalState";

export function TransacrionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button
          className="mx-4 my-2 px-3 py-1 bg-red-500 rounded-md"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TransacrionItem;
