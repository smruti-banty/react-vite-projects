import { useState } from "react";
import AddTrip from "./AddTrip";
import Header from "./Header";
import ListTrip from "./ListTrip";

function App() {
  const [lists, setLists] = useState([]);
  function addList(count, item) {
    const id = parseInt(Math.random() * 10000);
    const isCompleted = false;
    setLists([...lists, { id, count, item, isCompleted }]);
  }

  function isCompleted(id) {
    setLists((lists) => {
      const newList = [...lists];
      newList.forEach((list) => {
        if (list.id == id) list.isCompleted = !list.isCompleted;
      });
      return newList;
    });
  }

  function removeItem(id) {
    setLists((list) => list.filter((l) => l.id !== id));
  }
  return (
    <>
      <Header />
      <AddTrip addList={addList} />
      <ListTrip
        list={lists}
        isCompleted={isCompleted}
        removeItem={removeItem}
      />
      {/* <footer className="bg-gray-200 py-4 absolute bottom-0 w-full">
        <h1>hello</h1>
      </footer> */}
    </>
  );
}

export default App;
