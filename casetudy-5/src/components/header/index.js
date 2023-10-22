import React from "react";
import Style from "./header.scss";

function Header() {
  return (
    <div className="div">
      <div className="container1">
        <div className="content">
          <div className="title">GIỚI THIỆU</div>
          <div className="title">LOẠI PHÒNG</div>
          <div className="title">ẨM THỰC</div>
          <div className="title">HỘI NGHỊ VÀ SỰ KIỆN</div>
          <div className="title"> SPA</div>
          <div className="title">GIẢI TRÍ</div>
          <div className="title">ĐIỂM ĐẾN</div>
          <div className="title"> ƯU ĐÃI</div>
        </div>
        <div className="login">ĐĂNG NHẬP</div>
      </div>
    </div>
  );
}

export default Header;
