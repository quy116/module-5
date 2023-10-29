import "./App.css";
import Header from "./components/header/index";
import Footer from "./components/footter/Footer";
import Cusd from "./components/card-cusd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CustomerTable from "./components/customers/customerTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateCusomter from "./components/customers/CreateCusomter";
import EditCustomer from "./components/customers/EditCustomer";
import ContractList from "./components/contracts/ContractList";
import CreateContract from "./components/contracts/CreateContract";
import EditContract from "./components/contracts/EditContract";
function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/customer" element={<CustomerTable />}></Route>
        <Route path="/contract" element={<ContractList />}></Route>

        <Route path="/facility" element={<Cusd />}></Route>
        <Route path="/createCumtomer" element={<CreateCusomter />}></Route>
        <Route path="/editCustomer/:id" element={<EditCustomer />}></Route>
        <Route path="/createContract" element={<CreateContract />}></Route>
        <Route path="/editContract/:id" element={<EditContract />}></Route>
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
