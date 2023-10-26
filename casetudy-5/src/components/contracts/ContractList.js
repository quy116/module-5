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
