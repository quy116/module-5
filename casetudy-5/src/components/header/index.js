import React from "react";
import Style from "./header.scss";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function Header() {
  return (
    <div className="div">
      <div className="container1">
        <div className="content">
          <div className="title">
            {" "}
            <Link className="title" to="/facility">
              LOẠI PHÒNG
            </Link>
          </div>
          <div className="title">
            <Link className="title" to="/customer">
              KHÁCH HÀNG
            </Link>
          </div>

          <div className="title">
            {" "}
            <Link to="/contract" className="title">
              HỢP ĐỒNG
            </Link>
          </div>
        </div>
        <div className="login">ĐĂNG NHẬP</div>
      </div>
    </div>
  );
}

export default Header;
