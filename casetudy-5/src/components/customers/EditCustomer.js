import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yub from "yup";
import * as customerService from "../../service/customerService/customerSerivce";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function EditCustomer() {
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();
  console.log(customer);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const customers = await customerService.getByIdCustomer(id);
      setCustomer(customers);
    }
    if (id) {
    }
    fetchData();
  }, []);
  const customerType = [
    { typeValue: 1, typeName: "Member" },
    { typeValue: 2, typeName: "Silver" },
    { typeValue: 3, typeName: "Gold" },
    { typeValue: 4, typeName: "Platinum" },
    { typeValue: 5, typeName: "Diamond" },
  ];
  const validate = Yub.object().shape({
    name: Yub.string().required(),
    birthDay: Yub.string().required(),
    gender: Yub.string().required(),
    identity: Yub.string().required(),
    phoneNumber: Yub.string().required(),
    email: Yub.string().required(),
    customerType: Yub.string().required(),
    address: Yub.string().required(),
  });
  const handleSubmit = (values) => {
    for (let i = 0; i < customerType.length; i++) {
      if (values.customerType == customerType[i].typeValue) {
        values.customerType = customerType[i].typeName;
      }
    }
    console.log(values);
    const flag = customerService.editCustomers(values);
    toast.success("thêm thành công");
    navigate("/customer");
  };
  if (!customer.id) {
    return null;
  }
  return (
    <div className="flex justify-center p-5">
      <div className="w-full max-w-[700px] bg-white rounded-lg shadow-md p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Chỉnh sửa Khách Hàng
        </h2>
        <Formik
          initialValues={customer}
          onSubmit={handleSubmit}
          validationSchema={validate}
        >
          <Form className="flex flex-col">
            <div className="inline-block text-red-600">
              {" "}
              <ErrorMessage className="text-red-600" name="name"></ErrorMessage>
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
              {customerType.map((type) => (
                <option
                  key={type.typeValue}
                  value={type.typeValue}
                  selected={type.typeValue === customer.customerType}
                >
                  {type.typeName}
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
  );
}

export default EditCustomer;
