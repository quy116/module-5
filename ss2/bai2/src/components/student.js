import React from "react";
const students = [
  { id: 1, name: "Quý", age: 30, address: "Đà Nẵng" },
  { id: 2, name: "Heo", age: 32, address: "sao hoả" },
  { id: 3, name: "Cute", age: 33, address: "sao mộc" },
  { id: 4, name: "Đẹp trai", age: 34, address: "sao kim " },
  { id: 5, name: "siêu Dễ hươnggg", age: 31, address: "trong tim em " },
];
function Student() {
  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>address</th>
        </tr>
        {students.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Student;
