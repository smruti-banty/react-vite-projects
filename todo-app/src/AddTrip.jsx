import { useState } from "react";

const AddTrip = ({ addList }) => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    addList(count, item);
  }
  return (
    <section className="bg-teal-900 flex justify-center gap-5 p-3 place-items-center">
      <p>What do you need for your 😍 trip? </p>
      <form className="flex justify-center gap-2" onSubmit={onSubmit}>
        <select
          name="count"
          id="count"
          className="w-16 rounded-full px-3"
          onChange={(e) => setCount(e.target.value)}
        >
          {[...Array(15)].map((v, i) => (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          className="rounded-full px-3"
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="submit"
          value="ADD"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded-full"
        />
      </form>
    </section>
  );
};

export default AddTrip;
