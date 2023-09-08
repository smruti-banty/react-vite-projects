import { useState } from "react";

interface BillProps {
  id: number;
  name: string;
  changeMessage: (message: string, id: number) => void;
}

const Bill: React.FC<BillProps> = ({ id, name, changeMessage }) => {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [billPay, setBillPay] = useState(1);
  function splitExpense(event: React.ChangeEvent<HTMLInputElement>) {
    const expense = Number(event.target.value);
    setYourExpense(expense);
    setFriendExpense(bill - expense);
  }
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message =
      billPay == 1
        ? `${name} owes you $${friendExpense}`
        : `You owes ${name} $${yourExpense}`;
    changeMessage(message, id);
  }
  return (
    <div className="bill-container bg-slate-950 rounded p-5 h-64">
      <h2>SPLIT A BILL WITH {name.toUpperCase()}</h2>
      <form className="mt-3 grid gap-3" onSubmit={onSubmit}>
        <div className="flex gap-3 justify-between place-items-center">
          <label>🪙 Bill value</label>
          <input
            type="number"
            className="w-24 px-1"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-3 justify-between place-items-center">
          <label>🧍‍♂️ Your expense</label>
          <input
            type="number"
            className="w-24 px-1"
            value={yourExpense}
            onChange={splitExpense}
          />
        </div>
        <div className="flex gap-3 justify-between place-items-center">
          <label>🧑‍🤝‍🧑🏼 {name} expense</label>
          <input
            type="number"
            className="w-24 px-1"
            disabled
            value={friendExpense}
            onChange={(e) => setFriendExpense(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-3 justify-between place-items-center">
          <label>🤑 Who is paying the bill?</label>
          <select
            className="w-24 px-1"
            value={billPay}
            onChange={(e) => setBillPay(Number(e.target.value))}
          >
            <option value="1">You</option>
            <option value="2">{name}</option>
          </select>
        </div>
        <div className="text-right mt-3">
          <input
            type="submit"
            value="Split bill"
            className="bg-teal-600 px-3 rounded cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Bill;
