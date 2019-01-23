import React from "react";

const FriendForm = props => {
  return (
    <div className="form__container">
      <form>
        <input
          className="new-friend-name"
          type="text"
          name="newFriendName"
          placeholder="Enter a friend name"
          value={props.stateOnProps.newFriendName}
          onChange={props.onChange}
        />
        <input
          className="new-friend-age"
          type="text"
          name="newFriendAge"
          placeholder="Enter a friend age"
          value={props.stateOnProps.newFriendAge}
          onChange={props.onChange}
        />
        <input
          className="new-friend-email"
          type="text"
          name="newFriendEmail"
          placeholder="Enter a friend email"
          value={props.stateOnProps.newFriendEmail}
          onChange={props.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FriendForm;
