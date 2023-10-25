import axios from "axios";
import React from "react";

export async function showList() {
  try {
    const list = await axios.get("http://localhost:8080/posts");
    return list.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addTodo(values) {
  try {
    const todo = await axios.post("http://localhost:8080/posts", values);
    return true;
  } catch (error) {
    return false;
  }
}
