import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { saveBook } from "../service/data/bookService";

function AddBook() {
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    quantity: "",
  };
  const validate = Yup.object().shape({
    title: Yup.string().required("Vui lòng nhập tiêu đề"),
    quantity: Yup.string().required("Vui lòng nhập số lượng"),
  });
  const addBook = async (values) => {
    let flag = saveBook(values);
    console.log(flag);
    if (flag) {
      navigate("/");
    } else {
      navigate("/editBook");
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => addBook(values)}
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

export default AddBook;
