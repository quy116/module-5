import React, { useState, useEffect } from "react";
import * as customerService from "../../service/customerService/customerSerivce";
import "bootstrap/dist/css/bootstrap.min.css";
import MoveCustomer from "./DeleteCustomer";
import { Link } from "react-router-dom";
function CustomerTable() {
  const [customerData, setCustomerData] = useState([]);
  const [deleteCustomer, setDeleteCustomer] = useState({});
  const [isShowModal, setShowModal] = useState(false);
  const [name, setname] = useState("");
  const handleModal = async (value) => {
    setShowModal(true);
    setDeleteCustomer(value);
  };
  const closeModal = async () => {
    display(name);
    setShowModal(false);
    setDeleteCustomer(null);
  };
  const display = async (searchName) => {
    const res = await customerService.getAll(searchName);
    setCustomerData(res);
  };
  useEffect(() => {
    display(name);
  }, [name]);
  const handleSearchname = async (value) => {
    setname(value);
  };
  return (
    <div className="p-4">
      <div className="text-4xl">Danh Sách Khách Hàng</div>
      <div className="flex justify-between">
        <div className="relative w-64 overflow-hidden rounded-lg">
          <div className="before absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg"></div>
          <div className="after absolute -z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg"></div>
          <input
            name="searchName"
            onChange={(event) => {
              handleSearchname(event.target.value);
            }}
            placeholder="name..."
            className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
            type="text"
          />
        </div>
        <div className="flex items-center justify-end gap-2 pb-4 text-right">
          <Link
            className="p-2 text-purple-200 bg-purple-800 rounded-md"
            style={{ textDecoration: "none" }}
            to={"/createCumtomer"}
          >
            Thêm mới Khách hàng
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center bg-gradient-to-tl">
        <main className="table w-4/5 bg-opacity-75 rounded-lg shadow-lg overflow-hidde h-5/6 backdrop-blur-7 ">
          <section className="table__body">
            <table className="w-full h-80">
              <thead>
                <tr className="">
                  <th className="p-4">Tên</th>
                  <th className="p-4">Ngày</th>
                  <th className="p-4">Giới Tính</th>
                  <th className="p-4">Căn cước công dân</th>
                  <th className="p-4">Số điện Thoại</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Loại khách hàng</th>
                  <th className="p-4">Địa Chỉ</th>
                  <th className="p-4">Chức Năng</th>
                </tr>
              </thead>
              <tbody>
                {customerData.map((item, index) => (
                  <tr key={index}>
                    <td className="text-limit">{item.name}</td>
                    <td className="text-limit">{item.birthDay}</td>
                    <td>{item.gender == 0 ? "Nam" : "Nữ"}</td>
                    <td className="text-limit">{item.identity}</td>
                    <td className="text-limit">{item.phoneNumber}</td>
                    <td className="text-limit">{item.email}</td>
                    <td className="text-limit">{item.customerType.typeName}</td>
                    <td className="text-limit">{item.address}</td>
                    <td className=" text-limit">
                      <Link
                        className="p-2 mr-1 text-black bg-yellow-500 rounded-md"
                        style={{ textDecoration: "none" }}
                        to={`/editCustomer/${item.id}`}
                      >
                        chỉnh sửa
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        className="p-2 text-black bg-red-600 rounded-md"
                        onClick={() => handleModal(item)}
                      >
                        Xoá
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <MoveCustomer
              show={isShowModal}
              select={deleteCustomer}
              handleClose={closeModal}
            ></MoveCustomer>
          </section>
        </main>
      </div>
    </div>
  );
}

export default CustomerTable;
