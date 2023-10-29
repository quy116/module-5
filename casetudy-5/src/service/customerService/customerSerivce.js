import axios from "axios";
import React from "react";

const URL_CUSTOMER = "http://localhost:8080/customers";
export async function getAll(value) {
  try {
    const listCustomer = await axios.get(
      `http://localhost:8080/customers?name_like=${value}`
    );
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

export async function saveCustomer(values) {
  try {
    const flag = await axios.post(URL_CUSTOMER, values);
    console.log(flag);
    return flag.status;
  } catch (error) {
    console.log("loi them moi service");
  }
}

export async function getByIdCustomer(id) {
  try {
    const customer = await axios.get(`http://localhost:8080/customers/${id}`);
    return customer.data;
  } catch (error) {
    console.log("loi getId");
  }
}
export async function editCustomers(values) {
  try {
    const flag = await axios.put(URL_CUSTOMER + `/${values.id}`, values);
    return flag.status;
  } catch (error) {
    console.log("loi edit");
  }
}

export async function getType() {
  try {
    const type = await axios.get(`http://localhost:8080/customer-types`);
    return type.data;
  } catch (error) {
    console.log("loi~");
  }
}
