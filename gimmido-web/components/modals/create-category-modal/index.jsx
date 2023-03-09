import React from "react";
import { Input } from "@material-tailwind/react";

const CreateCategoryModal = ({
  closeModal,
  createCategory,
  openEditModal,
  editedName,
  updateName,
  editedCatname,
  setCategoryName,
  categoryName,
  editedCategoryName,
  setEditedCategoryName,
  toBeEditedCatName
}) => {
  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            {/*content*/}
            <div className="border-0 p-9 shadow-lg relative flex flex-col gap-4 w-[25rem] bg-white outline-none focus:outline-none">
              {/*body*/}
              {openEditModal ? (
                <>
                  <Input
                    className="font-semibold"
                    label="Category name"
                    size="lg"
                    defaultValue={toBeEditedCatName}
                    onChange={(e) => setEditedCategoryName(e.target.value)}
                    />
                  <button
                    onClick={updateName}
                    className="p-2 bg-primary text-white font-semibold shadow-sm rounded-md"
                  >
                    Update
                  </button>
                  <button
                    onClick={closeModal}
                    className="p-2 bg-alertRed text-white font-semibold shadow-sm rounded-md"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <Input
                    className="font-semibold"
                    label="Category name"
                    size="lg"
                    // inputRef={categoryName}
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                  <button
                    disabled={categoryName === ""}
                    onClick={createCategory}
                    className={`p-2 ${
                      categoryName === "" ? "bg-disabled" : "bg-primary"
                    }  text-white font-semibold shadow-sm rounded-md`}
                  >
                    Create
                  </button>
                  <button
                    onClick={closeModal}
                    className="p-2 bg-alertRed text-white font-semibold shadow-sm rounded-md"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
};

export default CreateCategoryModal;
