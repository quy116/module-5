import React from "react";
import { toast } from "react-toastify";
import * as customerService from "../../service/customerService/customerSerivce";
function MoveCustomer(customer) {
  const { show, select, handleClose } = customer;
  console.log(show, select, handleClose);
  const handleDelete = async (customer) => {
    const res = await customerService.deleteCustomerById(customer.id);
    if (res === 200) {
      handleClose();
      toast.success("Xóa thành công!");
      console.log("heo");
    } else {
      toast.error("Lỗi");
    }
  };
  if (!show) return null;
  return (
    <>
      <div className="modal" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">XÁC NHẬN XÓA</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              {/* eslint-disable-next-line react/prop-types */}
              <p>Bạn có chắc chắn xóa khách hàng {select.name} không?</p>
              <p style={{ color: "red" }}>
                Lưu ý: Hành động này không thể hoàn tác!
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleDelete(select)}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MoveCustomer;
