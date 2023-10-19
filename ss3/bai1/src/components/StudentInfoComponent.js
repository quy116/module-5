import React, { Component } from "react";
class StudentInfoComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          Id: 1,
          Name: "Sang Heo",
          Age: "20",
          Address: "Đà Nẵng",
        },
        {
          Id: 2,
          Name: "Trung Heo",
          Age: "21",
          Address: "Đà Nẵng",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((student, index) => (
              <tr key={index}>
                <td>{student.Id}</td>
                <td>{student.Name}</td>
                <td>{student.Age}</td>
                <td>{student.Address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentInfoComponent;
