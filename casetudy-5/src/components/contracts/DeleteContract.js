import React from "react";
import * as contractService from "../../service/contractSerivce/ContractService";
import { toast } from "react-toastify";

function DeleteContract(props) {
  const { showMoDal, contract, closeModal } = props;
  const handleDelete = async (value) => {
    const res = await contractService.moveContract(value);
    if (res) {
      closeModal();
      toast.success("xoá thành công");
    } else {
      toast.error("Lỗi");
    }
  };
  if (!showMoDal) return null;
  return (
    <>
      <div className="modal" style={{ display: showMoDal ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modasl-header">
              <h5 className="modal-title">XÁC NHẬN XÓA</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              {/* eslint-disable-next-line react/prop-types */}
              <p>Bạn có chắc chắn xóa khách hàng {contract.name} không?</p>
              <p style={{ color: "red" }}>
                Lưu ý: Hành động này không thể hoàn tác!
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleDelete(contract)}
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

export default DeleteContract;
