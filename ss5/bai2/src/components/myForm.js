import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
function MyForm() {
  const person = {
    name: "",
    identity: "",
    dateYear: "",
    gender: [],
    country: "",
    company: "",
    position: "",
    medicalInsurance: "", // bảo hiểm ý tế
    province: "", //tỉnh thành
    district: "", // quận huyện
    wards: "", // phường xã,
    address: "",
    phoneNumber: "",
    email: "",
    fourteen: "", //14
    suspect: [], // nghi ngo benh
    fourteenCovid: [],
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("không được để trống"),
    identity: Yup.string().required("không được để trống"),
    dateYear: Yup.string().required("không được để trống"),
    dateYear: Yup.number().min(1900, "Năm phải lớn hơn hoặc bằng 1900"),
    country: Yup.string().required("không được để trống"),
    company: Yup.string().required("không được để trống"),
    province: Yup.string().required("không được để trống"),
    district: Yup.string().required("không được để trống"),
    wards: Yup.string().required("không được để trống"),
    address: Yup.string().required("không được để trống"),
    phoneNumber: Yup.string().required("không được để trống"),
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
        "Invalid email address "
      )
      .required("không được để trống"),
  });

  return (
    <Formik initialValues={person} validationSchema={validationSchema}>
      <Form>
        <h1>khai bao y te</h1>
        <div className="input">
          <label>họ và tên:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div className="input">
          <label>Số hộ chiếu /CMND</label>
          <Field type="text" name="identity" />
          <ErrorMessage name="identity" component="div" className="error" />
        </div>
        <div className="input">
          <label>Năm sinh</label>
          <Field type="text" name="dateYear" />
          <ErrorMessage name="dateYear" component="div" className="error" />
        </div>
        <div className="input">
          <select name="gender" id="">
            <option value="nu">nam</option>
            <option value="nam">nu</option>
          </select>
        </div>
        <div className="input">
          <label>country</label>
          <Field type="text" name="country" />
          <ErrorMessage name="country" component="div" className="error" />
        </div>
        <div className="input">
          <label>company</label>
          <Field type="text" name="company" />
          <ErrorMessage name="company" component="div" className="error" />
        </div>

        <div className="input">
          <label>position</label>
          <Field type="text" name="position" />
          <ErrorMessage name="position" component="div" className="error" />
        </div>
        <div className="input">
          <label>medicalInsurance</label>
          <Field type="text" name="medicalInsurance" />
          <ErrorMessage
            name="medicalInsurance"
            component="div"
            className="error"
          />
        </div>
        <div className="input">
          <label>province</label>
          <Field type="text" name="province" />
          <ErrorMessage name="province" component="div" className="error" />
        </div>
        <div className="input">
          <label>district</label>
          <Field type="text" name="district" />
          <ErrorMessage name="district" component="div" className="error" />
        </div>
        <div className="input">
          <label>wards</label>
          <Field type="text" name="wards" />
          <ErrorMessage name="wards" component="div" className="error" />
        </div>
        <div className="input">
          <label>address</label>
          <Field type="text" name="address" />
          <ErrorMessage name="address" component="div" className="error" />
        </div>
        <div className="input">
          <label>phoneNumber</label>
          <Field type="text" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" component="div" className="error" />
        </div>
        <div className="input">
          <label>email</label>
          <Field type="text" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
      </Form>
    </Formik>
  );
}

export default MyForm;
