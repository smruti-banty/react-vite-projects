import React, { useState } from "react";
import { Friend } from "./model/Friend";

interface AddFriendProps {
  updateFriendsList: (friend: Friend) => void;
}

const AddFriend: React.FC<AddFriendProps> = ({ updateFriendsList }) => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const friend: Friend = {
        id: Math.round(Math.random() * 100000),
        name: name,
        imageURL: imageURL,
        message: `You and ${name} are even`
    };

    updateFriendsList(friend);
  }

  return (
    <div className="container bg-slate-950 p-3">
      <form method="post" onSubmit={onSubmit} className="flex flex-col gap-3">
        <div className="form-group flex justify-between gap-3">
          <label>🧑‍🤝‍🧑 Friend name</label>
          <input
            type="text"
            className="p-1 bg-slate-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group flex justify-between">
          <label>🖼️ Image URL</label>
          <input
            type="url"
            className="p-1 bg-slate-800"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div className="submit-button text-right">
          <input type="submit" value="ADD" className="bg-blue-600 py-1 px-3 rounded cursor-pointer"/>
        </div>
      </form>
    </div>
  );
};

export default AddFriend;
