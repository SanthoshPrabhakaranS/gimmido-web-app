import React from "react";

const DeleteModal = ({
  setOpenDeleteModal,
  deleteCategory,
  title,
  setOpenAddPointModal,
  deletePoint
}) => {
  const _closeModal = () => {
    if (title === "Category") {
      setOpenDeleteModal(false);
    } else if (title === "Point") {
      setOpenAddPointModal(false);
    }
  };
  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 p-9 shadow-lg relative flex flex-col gap-6 w-[27rem] bg-white outline-none focus:outline-none">
              {/*body*/}
              <p className="font-medium">{`Are you sure you want to delete the ${title} ?`}</p>
              <div className="flex gap-3 w-full justify-center">
                <button
                  onClick={title === "Category" ? deleteCategory : deletePoint}
                  className="p-2 bg-alertRed rounded-md text-white font-medium shadow-sm"
                >
                  Delete
                </button>
                <button
                  onClick={_closeModal}
                  className="p-2 bg-gray-300 border rounded-md font-medium shadow-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
};

export default DeleteModal;
