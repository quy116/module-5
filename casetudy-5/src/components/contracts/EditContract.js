import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yub from "yup";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import * as contractService from "../../service/contractSerivce/ContractService";
function EditContract() {
  const navigate = useNavigate();
  const [contract, setContract] = useState({});
  const { id } = useParams();
  const findById = async () => {
    try {
      const res = await contractService.getbyId(id);
      setContract(res);
    } catch (error) {
      console.log("loi");
    }
  };
  useEffect(() => {
    findById();
  }, []);
  const validate = Yub.object().shape({
    name: Yub.string()
      .matches(/^[A-Za-z ]*$/, "Wrong name format!")
      .required(),
    startDate: Yub.string().required(),
    endDate: Yub.string().required(),
    deposit: Yub.string().required(),
    totalPay: Yub.string().required(),
  });
  const handleSubmit = async (values) => {
    const contract = await contractService.editContract(values);
    if (contract === 200) {
      toast("Edit thành công!");
      navigate("/contract");
    } else {
      toast("Lỗi");
      navigate(`/editContract/${id}`);
    }
  };

  return (
    contract.id && (
      <div className="flex justify-center p-5">
        <div className="w-full max-w-[700px] bg-white rounded-lg shadow-md p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Chỉnh sửa hợp đồng
          </h2>
          <Formik
            initialValues={contract}
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
                  name="startDate"
                ></ErrorMessage>
              </div>
              <Field
                type="date"
                name="startDate"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="startDate"
              />
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="endDate"
                ></ErrorMessage>
              </div>

              <Field
                name="endDate"
                type="text"
                placeholder="endDate"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></Field>
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="deposit"
                ></ErrorMessage>
              </div>
              <Field
                type="text"
                name="deposit"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="deposit"
              />
              <div className="text-red-600">
                {" "}
                <ErrorMessage
                  className="text-red-600"
                  name="totalPay"
                ></ErrorMessage>
              </div>
              <Field
                type="text"
                name="totalPay"
                className="p-2 mb-4 text-gray-800 transition duration-150 ease-in-out bg-gray-100 border-0 rounded-md focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="totalPay"
              />

              <button
                type="submit"
                className="px-4 py-2 mt-4 font-bold text-white transition duration-150 ease-in-out rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-indigo-600 hover:to-blue-600"
              >
                Thêm mới
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    )
  );
}

export default EditContract;
