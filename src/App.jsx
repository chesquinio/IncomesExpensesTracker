import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionFrom from "./components/transactions/TransactionFrom";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="w-3/5 flex justify-center items-center">
          <div className="bg-zinc-800 p-10 rounded-lg w-full">
            <Header />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1 m-2">
                <IncomeExpenses />
                <Balance />
                <TransactionFrom />
              </div>
              <div className="flex-1 flex flex-col m-2">
                <ExpenseChart/>
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
