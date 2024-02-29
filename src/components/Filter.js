import React from "react";
import { useDispatch } from "react-redux";
import { filterTasks } from "../JS/actions/actions";

function Filter() {
  const dispatch = useDispatch();
  return (
    <form className="Filter">
      <h3>Filter: </h3>
      <label htmlFor="allItems">
        <input
          type="radio"
          name="filterGroup"
          id="allItems"
          defaultChecked
          onChange={() => dispatch(filterTasks("all"))}
        />
        All
      </label>
      <label htmlFor="done">
        <input
          type="radio"
          name="filterGroup"
          id="done"
          onChange={() => dispatch(filterTasks("done"))}
        />
        Done
      </label>
      <label htmlFor="notDone">
        <input
          type="radio"
          name="filterGroup"
          id="notDone"
          onChange={() => dispatch(filterTasks("notDone"))}
        />
        Not yet
      </label>
    </form>
  );
}

export default Filter;
