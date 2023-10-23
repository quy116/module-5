import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import * as Yup from "yup";

function ValidationWithFormMilk() {
  let formValidate = { name: "", email: "", phone: "", message: "" };
  const validationSchema = {
    name: Yup.string().required("khong dc de trong"),
    email: Yup.string().matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "sai format"
    ),
    phone: Yup.string().required("khong dc de trong"),
    message: Yup.string().required("khong dc de trong"),
  };
  return (
    <div>
      <h1>Contract Form</h1>
      <Formik
        initialValues={formValidate}
        onSubmit={(values) => {
          //    call API => thêm mới
          values.gender = +values.gender;
          console.log(values);
        }}
        validationSchema={Yup.object(validationSchema)}
      >
        <Form>
          <div>
            <label>Name</label>
            <Field name="name" type="text"></Field>
            <ErrorMessage
              name="name"
              component="span"
              style={{ color: "red" }}
            ></ErrorMessage>
            <label>Email</label>
            <ErrorMessage
              name="email"
              component="span"
              style={{ color: "red" }}
            ></ErrorMessage>
            <Field name="email" type="text"></Field>
            <ErrorMessage
              name="email"
              component="span"
              style={{ color: "red" }}
            ></ErrorMessage>
            <label>Phone</label>
            <Field name="phone" type="text"></Field>
            <ErrorMessage
              name="phone"
              component="span"
              style={{ color: "red" }}
            ></ErrorMessage>
            <label>Message</label>
            <Field name="message" type="text"></Field>
            <ErrorMessage
              name="message"
              component="span"
              style={{ color: "red" }}
            ></ErrorMessage>
            <input type="submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ValidationWithFormMilk;
