import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return emptyInputFields();
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  age (> 0).",
      });
      return emptyInputFields();
    }
    const userData = {
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    };
    emptyInputFields();
    props.onAddUser(userData);
  };
  const emptyInputFields = () => {
    setUserName("");
    setUserAge("");
  };

  const errorHandler = () => setError(null);
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCancelError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            onChange={userNameHandler}
            value={userName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={userAgeHandler}
            value={userAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
