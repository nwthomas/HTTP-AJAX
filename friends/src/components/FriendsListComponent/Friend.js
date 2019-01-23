import React from "react";

const Friend = props => {
  const { name, age, email, id } = props.friend;
  return (
    <div className="friend">
      <h2 className="friend__name">{name}</h2>
      <p className="friend__age">{age}</p>
      <p className="friend__email">{email}</p>
      <div className="friend__buttons">
        <button
          onClick={() => props.modifyFriend(id)}
          className="btn modify"
          name="modify"
        >
          Modify
        </button>
        <button
          onClick={() => props.deleteFriend(id)}
          className="btn delete"
          name="modify"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Friend;
