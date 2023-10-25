import React, { useEffect, useState } from "react";
import { deleteBook, getAll, getBookById } from "../service/data/bookService";
import { Link } from "react-router-dom";

function ShowListBook() {
  const [getListBook, setGetListBook] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAll();
        setGetListBook(data);
      } catch (error) {
        console.log("loi", error);
      }
    }
    fetchData();
  }, []);
  async function deleteByid(id) {
    try {
      await deleteBook(id);
      const updatedData = getListBook.filter((item) => item.id !== id);
      setGetListBook(updatedData);
    } catch (error) {
      console.log("loi", error);
    }
  }
  return (
    <div>
      <Link style={{ color: "black" }} to="/addBook">
        Create
      </Link>{" "}
      <br />
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>quantity</td>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(getListBook) ? (
            getListBook.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <Link
                  // onClick={(event) => showEdit(item.id)}
                  style={{ color: "black" }}
                  to={`/editBook/${item.id}`}
                >
                  edit
                </Link>
                <button onClick={(event) => deleteByid(item.id)}>delete</button>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Danh sách trống</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowListBook;
