import { Friend } from "./model/Friend";

interface FriendListProps {
  friend: Friend;
  newBill: (id: number) => void;
  selectedId: number;
}

const FriendList: React.FC<FriendListProps> = ({
  friend,
  newBill,
  selectedId,
}) => {
  const isSelected = friend.id === selectedId;

  return (
    <div className="card-item">
      <ul className="flex gap-5 place-items-center justify-between">
        <li>
          <img src={friend.imageURL} alt="" className="rounded-full" />
        </li>

        <li>
          <h3>{friend.name}</h3>
          <p>{friend.message}</p>
        </li>

        <li>
          <button onClick={() => newBill(friend.id)}>
            {!isSelected ? "select" : "close"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
