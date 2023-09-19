import { useState } from "react";
import "./style/App.css";
import FriendLists from "./FriendLists";
import { Friend } from "./model/Friend";
import AddFriend from "./AddFriend";
import Bill from "./Bill";

function App() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  function upadateFriendsList(friend: Friend) {
    setFriends([...friends, friend]);
    setIsAdd(false);
  }

  function newBill(id: number) {
    if (id === selectedId) {
      setSelectedId(0);
      return;
    }
    setSelectedId(id);
  }

  function changeMessage(message: string, id: number) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === id ? { ...friend, message } : friend
      )
    );
  }
  return (
    <div className="container flex gap-5">
      <div className="friend-container">
        {friends.length > 0 && (
          <FriendLists friends={friends} newBill={newBill} selectedId={selectedId}/>
        )}
        {isAdd ? (
          <AddFriend updateFriendsList={upadateFriendsList} />
        ) : (
          <button onClick={() => setIsAdd(true)}>Add Friend</button>
        )}
      </div>
      {selectedId > 0 && (
        <Bill
          id={selectedId}
          name={friends.find((f) => f.id === selectedId)?.name || ""}
          changeMessage={changeMessage}
          key={selectedId}
        />
      )}
    </div>
  );
}

export default App;
