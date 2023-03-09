import React, { useEffect, useRef, useState } from "react";
import { tableData as data } from "@/components/constants/tableData";
import PageHeader from "@/components/page-header";
import CreateCategoryModal from "@/components/modals/create-category-modal";
import { EditIcon, DeleteIcon } from "@/public/icons/icons";
import Link from "next/link";
import DeleteModal from "@/components/modals/delete-modal";
import { useRouter } from "next/router";

const CriteriaModifications = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [tableData, setTableData] = useState(data);
  const [categoryName, setCategoryName] = useState("");
  const [editedCategoryName, setEditedCategoryName] = useState("");
  const [toBeEditedCatName, setToBeEditedCatName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("email");
    if (loggedIn) {
      router.push("/criteria-modifications");
    } else {
      router.push("/login");
    }
  }, []);

  const _openModal = () => {
    setOpenCategoryModal(true);
  };

  const _closeModal = () => {
    setOpenCategoryModal(false);
    setOpenEditCategoryModal(false);
  };

  const _createCategoryHandler = () => {
    setTableData([...tableData, categoryName]);
    setOpenCategoryModal(false);
    setCategoryName("");
  };

  const _openEditModal = (name) => {
    setOpenEditCategoryModal(true);
    setToBeEditedCatName(name);
  };

  const _updateCategoryName = () => {
    const newData = tableData.map((element) => {
      if (element === toBeEditedCatName) {
        return editedCategoryName;
      }
      return element;
    });
    setTableData(newData);
    setOpenEditCategoryModal(false);
  };

  const _deleteCategory = () => {
    const newData = tableData.filter((element) => element !== deleteId);
    setTableData(newData);
    setOpenDeleteModal(false);
  };

  const _openDeleteModal = (item) => {
    setOpenDeleteModal(true);
    setDeleteId(item);
  };

  return (
    <div>
      <PageHeader title={"Criteria modifications"} />
      {openDeleteModal ? (
        <DeleteModal
          setOpenDeleteModal={setOpenDeleteModal}
          deleteCategory={_deleteCategory}
          title={"Category"}
        />
      ) : null}
      {openCategoryModal || openEditCategoryModal ? (
        <CreateCategoryModal
          closeModal={_closeModal}
          categoryName={categoryName}
          createCategory={_createCategoryHandler}
          openEditModal={openEditCategoryModal}
          updateName={_updateCategoryName}
          editedCategoryName={editedCategoryName}
          setEditedCategoryName={setEditedCategoryName}
          setCategoryName={setCategoryName}
          toBeEditedCatName={toBeEditedCatName}
        />
      ) : null}
      <div className="px-5 py-4 w-full flex flex-col gap-2">
        <div className="w-full flex justify-end items-center gap-2">
          {/* <div className="h-[3px] w-[calc(100%-10%)] bg-primary flex justify-start"></div> */}
        </div>
        <table className="table-auto w-full border-gray-100">
          <thead className="bg-secondaryLight text-left">
            <tr>
              <th className="p-2 text-lg flex w-full items-center justify-between">
                <h1>Categories</h1>
                <button
                  type="submit"
                  onClick={_openModal}
                  className="p-2 w-auto font-bold text-primary rounded-md text-sm bg-secondary shadow-sm"
                >
                  Add Category
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => {
              return (
                <tr
                  key={item}
                  className="border-2 even:bg-[#f5f5f5] odd:bg-white"
                >
                  <td className="p-1 font-semibold text-secondaryDark flex w-full">
                    <span className="cursor-pointer hover:underline hover:font-semibold w-[90%]">
                      <Link
                        href={`/criteria-modifications/${
                          item.charAt(0).toLowerCase() +
                          item.slice(1).replace(/ /g, "-")
                        }`}
                      >
                        {item}
                      </Link>
                    </span>
                    <div className="w-[10%] flex justify-end items-center gap-3 px-1">
                      <div
                        onClick={() => _openEditModal(item)}
                        className="cursor-pointer hover:scale-110"
                      >
                        <EditIcon />
                      </div>
                      <div
                        onClick={() => _openDeleteModal(item)}
                        className="cursor-pointer hover:scale-110"
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CriteriaModifications;
