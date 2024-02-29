import {
  CHECK_AS_DONE,
  DELETE_TASK,
  EDIT_TASK,
  ADD_TASK,
  FILTER_TASKS,
} from "../constants/actionsTypes";


export const checkAsDone = (payload) => {
  return { type: CHECK_AS_DONE, payload };
};
export const deleteTask = (payload) => {
  return { type: DELETE_TASK, payload };
};
export const editTask = ({id, desc}) => {
  return {
    type: EDIT_TASK,
    payload: {
      id, desc
    }
  };
}
export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload
  };
}
export const filterTasks = (payload) => {
  return {
    type: FILTER_TASKS,
    payload
  }
}