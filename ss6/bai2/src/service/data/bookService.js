import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export async function getAll() {
  try {
    const res = await axios.get("http://localhost:8080/book");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function saveBook(values) {
  try {
    await axios.post("http://localhost:8080/book", values);
    return true;
  } catch (error) {
    return false;
  }
}

export async function deleteBook(id) {
  try {
    await axios.delete(`http://localhost:8080/book/${id}`);
    return true;
  } catch (error) {
    console.log("loi");
  }
}

export async function getBookById(id) {
  try {
    const book = await axios.get(`http://localhost:8080/book/${id}`);
    return book.data;
  } catch (e) {
    console.log("loi");
  }
}

export async function edit(values) {
  try {
    await axios.put("http://localhost:8080/book/" + values.id, values);
    return true;
  } catch (error) {
    console.log("loi");
    return false;
  }
}
