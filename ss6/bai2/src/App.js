import logo from "./logo.svg";
import "./App.css";
import AddBook from "./components/AddBook";
import ShowListBook from "./components/ShowListBook";
import { Route, Routers, Routes } from "react-router-dom";
import EditBook from "./components/EditBook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowListBook />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/editBook/:id" element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
