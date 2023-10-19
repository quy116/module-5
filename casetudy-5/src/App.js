import "./App.css";
import Header from "./component/header/index";
import Body from "./component/body/index.js";
import Footer from "./component/footter";
import Cusd from "./component/card-cusd";
import Table from "./component/table";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Cusd />
      <Table />
      <div className="fotter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
