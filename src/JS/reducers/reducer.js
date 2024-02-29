import {
  CHECK_AS_DONE,
  DELETE_TASK,
  EDIT_TASK,
  ADD_TASK,
  FILTER_TASKS,
} from "../constants/actionsTypes";

const initialState = {
  Tasks: [],
  filterValue: "all",
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_AS_DONE:
      return {
        ...state,
        Tasks: state.Tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        Tasks: state.Tasks.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        Tasks: state.Tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.desc }
            : task
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        Tasks: [
          ...state.Tasks,
          {
            id: state.Tasks.length,
            description: action.payload,
            isDone: false,
          },
        ],
      };
    case FILTER_TASKS:
      return {
        ...state,
        filterValue: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
