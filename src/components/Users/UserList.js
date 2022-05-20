import React from "react";
import Card from "../UI/Card";
import User from "./User";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map((user) => (
          <User name={user.name} age={user.age} key={user.id} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
