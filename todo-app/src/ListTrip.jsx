const ListTrip = ({ list, isCompleted, removeItem }) => (
  <section className="container mx-auto my-10 grid grid-cols-4 gap-10">
    {list.map((l) => (
      <List
        data={l}
        key={l.id}
        isCompleted={isCompleted}
        removeItem={removeItem}
      />
    ))}
  </section>
);

function List({ data, isCompleted, removeItem }) {
  return (
    <ul className="flex place-items-center gap-1">
      <li>
        <input type="checkbox" onChange={(e) => isCompleted(data.id)} />
      </li>
      <li className={data.isCompleted ? 'line-through' : ''}>
        {data.count} {data.item}
      </li>
      <li>
        <button onClick={(e) => removeItem(data.id)}>❌</button>
      </li>
    </ul>
  );
}

export default ListTrip;
