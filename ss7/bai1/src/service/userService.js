import axios from "axios";
const URL_Users = "http://localhost:8080/users";
export const getAllUsers = async () => {
  try {
    let temp = await axios.get(URL_Users);
    return temp.data;
  } catch (e) {}
};

export const deleteUser = async (id) => {
  try {
    let temp = await axios.delete(URL_Users + "/" + id);
    console.log(temp);
    return temp.status;
  } catch (e) {}
};
