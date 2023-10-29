import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yub from "yup";
import * as customerService from "../../service/customerService/customerSerivce";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function EditCustomer() {
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();
  const [type, setType] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const customers = await customerService.getByIdCustomer(id);
      setCustomer(customers);
    }
    displayType();
    fetchData();
  }, []);
  const displayType = async () => {
    const type = await customerService.getType();
    setType(type);
  };
  const validate = yub.object().shape({
    name: yub
      .string()
      .matches(/^[A-Za-z ]*$/, "Wrong name format!")
      .required(),
    address: yub.string().required(),
    birthDay: yub
      .string()
      .matches(/^\d{4}\-\d{2}\-\d{2}$/, "wrong birthday format!")
      .required(),
    email: yub
      .string()
      .matches(
        /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/,
        "Invalid email!"
      )
      .required(),
    phoneNumber: yub
      .string()
      .matches(
        /^090\d{7}$|^091\d{7}$|^\(84\)(90\d{7})$|^\(84\)(91\d{7})$/,
        "Invalid phone number format!!"
      )
      .required(),
    identity: yub
      .string()
      .matches(
        /^\d{9}(\d{3})?$/,
        "Invalid identity format, put 9 to 12 numbers into this field!!"
      )
      .required(),
    gender: yub.string().required(),
    customerType: yub.string().required(),
  });
  const handleSubmit = async (values) => {
    const res = {
      ...values,
      customerType: JSON.parse(values.customerType),
    };
    console.log(res);
    const flag = await customerService.editCustomers(res);
    if (flag === 200) {
    }
    toast.success("thêm thành công");
    navigate("/customer");
  };
  const initialValues = {
    id: customer.id,
    name: customer.name,
    birthDay: customer.birthDay,
    gender: customer.gender,
    identity: customer.identity,
    phoneNumber: customer.phoneNumber,
    email: customer.email,
    customerType: JSON.stringify(customer.customerType),
    address: customer.address,
  };
  return (
    customer.id && (
      <div className="flex justify-center p-5">
        <div className="w-full max-w-[700px] bg-white rounded-lg shadow-md p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Chỉnh sửa Khách Hàng
          </h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validate}
          >
            <Form className="flex flex-col">
              <div className="inline-block text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="name"
                ></ErrorMessage>
              </div>
              <Field
                type="text"
                name="name"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Tên"
              />
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="birthDay"
                ></ErrorMessage>
              </div>
              <Field
                type="date"
                name="birthDay"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Ngày Sinh"
              />
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="gender"
                ></ErrorMessage>
              </div>

              <Field
                name="gender"
                as="select"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="gender">Chọn giới tính</option>
                <option value="0">Nam</option>
                <option value="1">Nữ</option>
              </Field>
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="identity"
                ></ErrorMessage>
              </div>
              <Field
                type="text"
                name="identity"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Căn cước công dân"
              />
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="phoneNumber"
                ></ErrorMessage>
              </div>
              <Field
                type="text"
                name="phoneNumber"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Số điện thoại"
              />
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="email"
                ></ErrorMessage>
              </div>
              <Field
                type="email"
                name="email"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Email"
              />
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="customerType"
                ></ErrorMessage>
              </div>
              <Field
                name="customerType"
                as="select"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                {type.map((item) => (
                  <option key={item.id} value={JSON.stringify(item)}>
                    {item.typeName}
                  </option>
                ))}
              </Field>
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="address"
                ></ErrorMessage>
              </div>
              <Field
                type="text"
                name="address"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Địa Chỉ"
              />

              <button
                type="submit"
                className="px-4 py-2 mt-4 font-bold text-white transition duration-150 ease-in-out rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-indigo-600 hover:to-blue-600"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    )
  );
}

export default EditCustomer;
