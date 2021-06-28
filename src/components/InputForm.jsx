import React, { useState } from "react";
import { Form } from "react-bootstrap";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";

const InputForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const todo = {
      description: description,
      id: uniqid(),
      completed: false,
    };

    console.log(todo);
    dispatch(addTodo(todo));
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="New task..."
        value={description}
        onChange={handleChange}
      />
      <Form.Control type="submit" />
    </Form>
  );
};

export default InputForm;
