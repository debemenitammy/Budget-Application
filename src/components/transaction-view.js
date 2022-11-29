import { removeTransaction } from "../store/budget.store";

export default function TransactionView({ transactions, type }) {
  return (
    <>
      <h2 style="text-align: center;"> {type} </h2>
      <ul className="transaction-list">
        {transactions.map((e) => (
          <>
            <li>
              <div className="flex-justify-btw">
                <h3>
                  {e.title} {e.amount} {e.type}
                </h3>
                <div className="flex-item-center">
                  <button
                    className="main delete"
                    onClick={() => removeTransaction(e.uid)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
