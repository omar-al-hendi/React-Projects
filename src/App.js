import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userData) => {
    setUserList((prevState) => setUserList([userData, ...prevState]));
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {userList.length > 0 && <UserList userList={userList} />}
    </>
  );
};

export default App;
