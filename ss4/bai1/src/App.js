import logo from "./logo.svg";
import "./App.css";
import Counter1 from "./components/counter/counter1";
import Counter2 from "./components/counter/counter2";

function App() {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
