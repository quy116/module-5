import axios from "axios";
const URL_CONTRACT = "http://localhost:8080/contracts";
export async function getAll() {
  try {
    const list = await axios.get(URL_CONTRACT);
    return list.data;
  } catch (error) {
    console.log("loi");
  }
}

export async function moveContract(values) {
  try {
    const contracts = await axios.delete(
      `http://localhost:8080/contracts/${values.id}`
    );
    return contracts.status;
  } catch (error) {
    console.log("loi~");
  }
}

export async function createContract(value) {
  try {
    const flag = await axios.post("http://localhost:8080/contracts", value);
    return flag.status;
  } catch (error) {
    console.log("loi");
  }
}

export async function editContract(value) {
  console.log(value);
  try {
    const flag = await axios.put(
      `http://localhost:8080/contracts/${value.id}`,
      value
    );
    console.log(flag);
    return flag.status;
  } catch (error) {
    console.log("loi edit Contract");
  }
}

export async function getbyId(id) {
  try {
    const flag = await axios.get(`http://localhost:8080/contracts/${id}`);
    return flag.data;
  } catch (error) {
    console.log("loi lay contract id");
  }
}
