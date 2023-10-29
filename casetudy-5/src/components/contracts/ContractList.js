import React, { useEffect, useState } from "react";
import * as contractService from "../../service/contractSerivce/ContractService";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteContract from "./DeleteContract";
function ContractList() {
  const [ContractList, setContractList] = useState([]);
  const [deleteContract, setDeleteContract] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const handleModal = async (value) => {
    setIsShowModal(true);
    setDeleteContract(value);
  };
  const handleCloseModal = async () => {
    display();
    setIsShowModal(false);
    setDeleteContract(null);
  };
  const display = async () => {
    const data = await contractService.getAll();
    setContractList(data);
  };
  useEffect(() => {
    display();
  }, []);

  return (
    <div>
      <h1>DANH SÁCH HỢP ĐỒNG</h1>
      <div className="flex justify-between">
        <div className="relative w-64 overflow-hidden rounded-lg">
          <div className="before absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg"></div>
          <div className="after absolute -z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg"></div>
          <input
            name="searchName"
            onChange={(event) => {
              // handleSearchname(event.target.value);
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
            to={"/createContract"}
          >
            Thêm mới hợp đồng
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen p-12 bg-gradient-to-tl">
        <main className="table w-4/5 bg-opacity-75 shadow-lg overflow-hidde h-5/6 backdrop-blur-7 rounded-xl">
          <section className="table__body">
            <table className="w-full h-80">
              <thead>
                <tr>
                  <th className="p-4">Tên Hợp đồng</th>
                  <th className="p-4">Ngày bắt đầu</th>
                  <th className="p-4">Ngày kết thúc</th>
                  <th className="p-4">Cọc</th>
                  <th className="p-4">Tổng số tiền</th>
                </tr>
              </thead>
              <tbody>
                {ContractList.map((item, index) => (
                  <tr key={index}>
                    <td className="text-limit">{item.name}</td>
                    <td className="text-limit">{item.startDate}</td>
                    <td className="text-limit">{item.endDate}</td>
                    <td className="text-limit">{item.deposit}</td>
                    <td className="text-limit">{item.totalPay}</td>
                    <td className="text-limit">
                      <Link
                        style={{ textDecoration: "none" }}
                        className="p-2 text-black bg-red-600 rounded-md"
                        to={`/editContract/${item.id}`}
                      >
                        Edit
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
            <DeleteContract
              showMoDal={isShowModal}
              contract={deleteContract}
              closeModal={handleCloseModal}
            ></DeleteContract>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ContractList;
