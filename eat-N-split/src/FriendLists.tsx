import React from "react";
import { Friend } from "./model/Friend";
import FriendList from "./FriendList";

interface FriendListsProps {
  friends: Friend[];
  newBill: (id: number) => void;
  selectedId: number;
}

const FriendLists: React.FC<FriendListsProps> = ({
  friends,
  newBill,
  selectedId,
}) => {
  return (
    <div className="bg-slate-950 flex flex-col gap-5 p-3 rounded mb-3">
      {friends.map((friend) => (
        <FriendList
          friend={friend}
          newBill={newBill}
          key={friend.id}
          selectedId={selectedId}
        />
      ))}
    </div>
  );
};

export default FriendLists;
