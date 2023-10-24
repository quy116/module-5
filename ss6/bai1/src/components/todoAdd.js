import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import * as Yup from "yup";
import TodoList from "./todoList";
import { Navigate, Route, useNavigate } from "react-router-dom";

function TodoAdd() {
  const initialValues = {
    title: "",
    author: "",
  };
  const validate = Yup.object().shape({
    title: Yup.string().required("nhap vao  "),
  });
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await axios.post("http://localhost:8080/posts", values);
      navigate("/todolist");
      // Sau khi gửi xong, bạn có thể thực hiện các tác vụ khác ở đây nếu cần.
    } catch (error) {
      console.error("Gửi yêu cầu thất bại:", error);
    }
  };

  return (
    <div className="p-40">
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <label htmlFor="">todolist</label>
          <Field type="text" name="title"></Field>
          <ErrorMessage
            className="p-20 bg-slate-600  "
            name="title"
          ></ErrorMessage>
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default TodoAdd;
