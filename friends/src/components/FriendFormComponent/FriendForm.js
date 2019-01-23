import React from "react";
import "./FriendForm.css";

const FriendForm = props => {
  return (
    <div className="form__container">
      <form onSubmit={props.postNewFriend}>
        <input
          className="new-friend-name"
          type="text"
          name="newFriendName"
          placeholder="Name"
          value={props.stateOnProps.newFriendName}
          onChange={props.onChange}
        />
        <input
          className="new-friend-age"
          type="text"
          name="newFriendAge"
          placeholder="Age"
          value={props.stateOnProps.newFriendAge}
          onChange={props.onChange}
        />
        <input
          className="new-friend-email"
          type="text"
          name="newFriendEmail"
          placeholder="Email"
          value={props.stateOnProps.newFriendEmail}
          onChange={props.onChange}
        />
        <button type="submit">Submit</button>
        <button onClick={props.clearForm} type="button">
          Clear
        </button>
      </form>
    </div>
  );
};

export default FriendForm;
