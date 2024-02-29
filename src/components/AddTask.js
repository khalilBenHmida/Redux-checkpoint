import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/actions";

function AddTask({ listTaskRef }) {
  const dispatch = useDispatch();
  const newTask = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(newTask.current));
    e.target.reset();
    setTimeout(() => {
      listTaskRef.current.scrollTop = listTaskRef.current.scrollHeight;
    }, 0);
  };
  return (
    <form className="AddTask" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your new task.."
        required
        defaultValue={newTask.current}
        onChange={(e) => (newTask.current = e.target.value)}
      />
      <button type="submit">Add to the List</button>
    </form>
  );
}

export default AddTask;
