import React, { useRef } from "react";
import { Provider } from "react-redux";
import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import store from "./JS/store";
import Filter from "./components/Filter";
import Logo from "./components/Logo";

function App() {
  const listTaskRef = useRef(null);
  return (
    <Provider store={store}>
      <div className="App">
        <Logo/>
        <div className="MainContainer">
          <AddTask listTaskRef={listTaskRef} />
          <Filter />
          <ListTask listTaskRef={listTaskRef} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
