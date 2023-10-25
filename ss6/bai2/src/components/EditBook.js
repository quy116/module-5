import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { edit, getBookById, saveBook } from "../service/data/bookService";

function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    if (id) {
      getBookById(id).then((res) => {
        setBook(res);
      });
    }
  }, []);
  console.log(book);

  const validate = Yup.object().shape({
    title: Yup.string().required("Vui lòng nhập tiêu đề"),
    quantity: Yup.string().required("Vui lòng nhập số lượng"),
  });
  const editBook = async (values) => {
    let flag = edit(values);
    console.log(flag);
    if (flag) {
      navigate("/");
    } else {
      navigate("/editBook");
    }
  };

  if (!book.id) return null;

  return (
    <div>
      <Formik
        initialValues={book}
        validationSchema={validate}
        onSubmit={(values) => editBook(values)}
      >
        <Form>
          <Field type="text" name="title" placeholder="title"></Field>
          <ErrorMessage name="title"></ErrorMessage>
          <Field type="text" name="quantity"></Field>
          <ErrorMessage name="quantity" placeholder="quantity"></ErrorMessage>

          <button type="submit">gui</button>
        </Form>
      </Formik>
    </div>
  );
}

export default EditBook;
