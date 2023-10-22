import "./App.css";
import Header from "./components/header/index";
import Body from "./components/body/index.js";
import Footer from "./components/footter/Footer";
import Cusd from "./components/card-cusd";
import Table from "./components/table/customerTable";
import "bootstrap/dist/css/bootstrap.min.css";
import ContractTable from "./components/table/contractTable";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Cusd />
      <Table />
      <ContractTable />
      <div className="fotter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
