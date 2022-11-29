import { h } from "preact";
import style from "./style.css";
import {
  totalAmount,
  addTransaction,
	incomes,
	expenses
} from "../../store/budget.store";
import TransactionView from "../../components/transaction-view";
import { useSignal } from "@preact/signals";

const defaultValue = () => ({
	title: "",
	amount: "",
	type: "-",
});

const Home = () => {
  const inputValue = useSignal(defaultValue());

  return (
    <div class={style.home}>
      <div className="jumbotron bg-purple">
        <div className="text-white">
          <h1 className="main">Total: {totalAmount.value}</h1>
					<div className="inline-flex-row"> 
						<h3> E: {expenses.value.reduce((p, e) => p + +e.amount, 0)}</h3>
						<h3> I: {incomes.value.reduce((p, e) => p + +e.amount, 0)}</h3>
					</div>
        </div>
        <div className="inline-block bg-white">
          <input
            className="main"
            placeholder="Example: Banking chargees"
						value={inputValue.value.title}
            onChange={(e) => (inputValue.value.title = e.target.value)}
          />
          <input
            className="main w-100px bg-tint"
            placeholder="= 500000"
						value={inputValue.value.amount}
            onChange={(e) => (inputValue.value.amount = e.target.value)}
          />
          <select
            className="main"
						value={inputValue.value.type}
            onChange={(e) => (inputValue.value.type = e.target.value)}
          >
            <option value="-">Expense</option>
            <option value="+">Income</option>
          </select>
          <button
            className="main"
            onClick={() => {
              addTransaction(
                inputValue.value.title,
                inputValue.value.type,
                inputValue.value.amount
              );
							inputValue.value = defaultValue();
            }}
          >
            ADD
          </button>
        </div>
      </div>

      <div className="flex-wrap px-10 pt-10">
        <div className="w-half">
          <TransactionView
            type={"Expense"}
            transactions={expenses.value}
          />
        </div>
        <div className="w-half">
          <TransactionView
            type={"Income"}
            transactions={incomes.value}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
