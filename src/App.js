import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userData) => {
    setUserList((prevState) => setUserList([userData, ...prevState]));
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList userList={userList} />
    </div>
  );
};

export default App;
