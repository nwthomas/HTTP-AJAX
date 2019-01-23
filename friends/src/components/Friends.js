import React from "react";

const Friends = props => {
  return (
    <div className="friend">
      <h2 className="friend__name">{props.friend.name}</h2>
      <p className="friend__age">{props.friend.age}</p>
      <p className="friend__email">{props.friend.email}</p>
    </div>
  );
};

export default Friends;
