import React, { useState, useEffect } from "react";
import * as customerService from "../../service/customerService/customerSerivce";

function CustomerTable() {
  const [customerData, setCustomerData] = useState([]);

  const display = async () => {
    try {
      const data = await customerService.GetAll;
      setCustomerData(data);
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
                  <th className="p-4">Tên</th>
                  <th className="p-4">Ngày</th>
                  <th className="p-4">Giới Tính</th>
                  <th className="p-4">Căn cước công dân</th>
                  <th className="p-4">Số điện Thoại</th>
                  <th className="p-4">Loại khách hàng</th>
                  <th className="p-4">Địa Chỉ</th>
                </tr>
              </thead>
              <tbody>
                {customerData.map((item, index) => (
                  <tr key={index}>
                    <td className="text-limit">{item.name}</td>
                    <td className="text-limit">{item.date}</td>
                    <td className="text-limit">{item.gender}</td>
                    <td className="text-limit">{item.idCard}</td>
                    <td className="text-limit">{item.numberPhone}</td>
                    <td className="text-limit">{item.typeCustomer}</td>
                    <td className="text-limit">{item.address}</td>
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

export default CustomerTable;
