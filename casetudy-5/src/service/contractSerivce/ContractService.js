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
