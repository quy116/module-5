import "./App.css";
import Header from "./components/header/index";
import Footer from "./components/footter/Footer";
import Cusd from "./components/card-cusd";
import "bootstrap/dist/css/bootstrap.min.css";
import ContractTable from "./components/table/contractTable";
import { Routes, Route } from "react-router-dom";
import CustomerTable from "./components/customers/customerTable";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/customer" element={<CustomerTable />}></Route>
        <Route path="/contract" element={<ContractTable />}></Route>
        <Route path="/facility" element={<Cusd />}></Route>
      </Routes>
      {/* <Body /> */}
      {/* <Cusd />
      <Table />
      <ContractTable /> */}
      <div className="fotter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
