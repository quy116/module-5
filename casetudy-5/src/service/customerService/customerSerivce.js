import axios from "axios";
import React from "react";

const URL_CUSTOMER = "http://localhost:8080/customers";
export async function getAll() {
  try {
    const listCustomer = await axios.get(URL_CUSTOMER);
    console.log(listCustomer.data);
    return listCustomer.data;
  } catch (error) {
    console.log("loi");
  }
}

export async function deleteCustomerById(id) {
  try {
    const flag = await axios.delete(`http://localhost:8080/customers/${id}`);
    return flag.status;
  } catch (error) {
    console.log("loi~");
  }
}
