import React, { useState, useEffect } from "react";
import * as customerService from "../../service/customerService/customerSerivce";
import "bootstrap/dist/css/bootstrap.min.css";
import MoveCustomer from "./DeleteCustomer";
import { toast } from "react-toastify";
function CustomerTable() {
  const [customerData, setCustomerData] = useState([]);
  const [deleteCustomer, setDeleteCustomer] = useState({});
  const [isShowModal, setShowModal] = useState(false);
  const handleModal = async (value) => {
    setShowModal(true);
    setDeleteCustomer(value);
  };
  const closeModal = async () => {
    display();
    setShowModal(false);
    setDeleteCustomer(null);
  };
  const display = async () => {
    const res = await customerService.getAll();
    setCustomerData(res);
  };
  useEffect(() => {
    display();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-12 bg-gradient-to-tl">
        <main className="table w-4/5 bg-opacity-75 shadow-lg overflow-hidde h-5/6 backdrop-blur-7 rounded-xl">
          <section className="table__body">
            <table className="w-full h-80">
              <thead>
                <tr>
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
                    <td>{item.gender === 0 ? "Nam" : "Nữ"}</td>
                    <td className="text-limit">{item.identity}</td>
                    <td className="text-limit">{item.phoneNumber}</td>
                    <td className="text-limit">{item.email}</td>
                    <td className="text-limit">{item.customerType}</td>
                    <td className="text-limit">{item.address}</td>
                    <td className="text-limit">
                      <button
                        className="p-2 bg-blue-600 rounded-lg text-slate-300"
                        onClick={() => handleModal(item)}
                      >
                        Xoá
                      </button>
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
