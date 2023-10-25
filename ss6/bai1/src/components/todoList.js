import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { showList } from "../service/listTo/listTodoSerivce";

function TodoList() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = showList;
        setlist(response);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);
  console.log(list);

  return (
    <div className="w-100 text-9xl">
      {list.map((item, index) => (
        <ul key={index}>
          <li>{item.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default TodoList;
