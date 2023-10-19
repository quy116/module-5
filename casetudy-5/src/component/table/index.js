import React from "react";

function Table() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-5 bg-gradient-to-tl">
        <main className="table w-4/5 bg-opacity-75 shadow-lg overflow-hidde h-5/6 backdrop-blur-7 rounded-xl">
          <section className="table__body">
            <table className="w-full h-80">
              <thead>
                <tr>
                  <th className="p-4">Tên</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Số điện thoại</th>
                  <th className="p-4">Căn cước công dân</th>
                  <th className="p-4">Xoá</th>
                  <th className="p-4">Chỉnh sửa</th>
                  <th className="p-4">Xem chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <td className="text-limit"></td>
                <td className="text-limit"></td>
                <td className="text-limit"></td>
                <td className="text-limit"></td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className=" fa-regular fa-trash-can"></i>
                  </button>
                </td>
                <td>
                  <a>
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </a>
                </td>
                <td>
                  <a>
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                  </a>
                </td>
              </tbody>
            </table>
          </section>
          <div className="flex items-center justify-center hi">
            <a>
              <i className="fa-solid fa-arrow-left"></i>
            </a>
            <span></span>/<span></span>
            <a>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Table;
