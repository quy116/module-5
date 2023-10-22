import React, { useState, useEffect } from "react";
import * as contractList from "../../service/contractSerivce/ContractService";

function ContractTable() {
  const [contractData, setcontractData] = useState([]);

  const display = async () => {
    try {
      const data = await contractList.getAll;
      setcontractData(data);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
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
                  <th className="p-4">Ngày bắt đầu</th>
                  <th className="p-4">Ngày kết thúc</th>
                  <th className="p-4">Cọc</th>
                  <th className="p-4">Tổng số tiền</th>
                </tr>
              </thead>
              <tbody>
                {contractData.map((item, index) => (
                  <tr key={index}>
                    <td className="text-limit">{item.startDay}</td>
                    <td className="text-limit">{item.endDay}</td>
                    <td className="text-limit">{item.deposit}</td>
                    <td className="text-limit">{item.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ContractTable;
