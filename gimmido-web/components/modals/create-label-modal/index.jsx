import React from "react";
import { Input } from "@material-tailwind/react";

const CreateLabelModal = ({
  labelName,
  setLabelName,
  points,
  setPoints,
  addhHandler,
  closeModal,
  openAddPointModal,
  addPointHandler,
  editPoint,
  editedPoint,
  updatePointHandler,
  editedPointRef,
  data,
  addNewPoint,
  setAddNewPoint
}) => {
  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 p-9 shadow-lg relative flex flex-col gap-4 w-[25rem] bg-white outline-none focus:outline-none">
              {/*body*/}
              {openAddPointModal ? (
                <>
                  <Input
                    className="text-md font-semibold"
                    // inputRef={points}
                    value={addNewPoint}
                    onChange={(e) => setAddNewPoint(e.target.value)}
                    label="Points"
                  />
                  <button
                  disabled={addNewPoint === ""}
                    onClick={addPointHandler}
                    className={`p-2 ${addNewPoint === "" ? "bg-disabled" : "bg-primary"} text-white font-semibold shadow-sm rounded-md`}
                  >
                    Add
                  </button>
                </>
              ) : editPoint ? (
                <>
                  <Input
                    className="text-md font-semibold"
                    // inputRef={editedPointRef}
                    label="Points"
                    // defaultValue={editedPoint}
                    defaultValue={points}
                    onChange={(e) => setPoints(e.target.value)}
                  />
                  <button
                  disabled={points === ""}
                    onClick={updatePointHandler}
                    className={`p-2 ${points === "" ? "bg-disabled" : "bg-primary"} text-white font-semibold shadow-sm rounded-md`}
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  <Input
                    className="text-md font-semibold"
                    value={labelName}
                    onChange={(e) => setLabelName(e.target.value)}
                    label="Enter label name"
                    size="lg"
                  />
                  <Input
                    className="text-md font-semibold"
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                    label="Enter Point"
                  />
                  <button
                  disabled={labelName === "" || points === ""}
                    onClick={addhHandler}
                    className={`p-2 ${labelName === "" || points === "" ? "bg-disabled" : "bg-primary"} text-white font-semibold shadow-sm rounded-md`}
                  >
                    Add
                  </button>
                </>
              )}
                <button
                  onClick={() => closeModal()}
                  className="p-2 bg-alertRed text-white font-semibold shadow-sm rounded-md"
                >
                  Cancel
                </button>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
};

export default CreateLabelModal;
