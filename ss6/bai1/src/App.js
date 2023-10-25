import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Spinner from "./components/Spinner";
import TodoAdd from "./components/TodoAdd";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App text-center">
      <Routes>
        <Route path="/todolist" element={<TodoList />}></Route>
        <Route path="/addlist" element={<TodoAdd />}></Route>
      </Routes>

      {/* <Spinner  /> */}
    </div>
  );
}

export default App;
