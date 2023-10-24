import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function TodoList() {
  const [list, setlist] = useState([]);
  const name = useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/posts");
        setlist(response.data);
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
