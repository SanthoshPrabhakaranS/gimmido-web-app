import CreateLabelModal from "@/components/modals/create-label-modal";
import PageHeader from "@/components/page-header";
import React, { useEffect, useRef, useState } from "react";
import {
  EditIcon,
  DeleteIcon,
  AddIcon,
  BulletPointIcon,
  BackIcon,
} from "@/public/icons/icons";
import { useRouter } from "next/router";
import DeleteModal from "@/components/modals/delete-modal";
import Link from "next/link";

const EligibilityCriteria = () => {
  const [openCreateLabelModal, setOpenCreateLabelModal] = useState(false);
  const [openAddPointModal, setOpenAddPointModal] = useState(false);
  const [editPoint, setEditPoint] = useState(false);
  const [addPointId, setAddPointId] = useState(null);
  const [editedPoint, setEditedPoint] = useState("");
  const [currElementId, setCurrElementId] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [openDeletePointModal, setOpenDeletePointModal] = useState(false);
  const [currDeleteId, setCurrDeleteId] = useState(null);
  const [toDeletePoint, setToDeletePoint] = useState("");
  const [labelName, setLabelName] = useState("");
  const [points, setPoints] = useState("");
  const [addNewPoint, setAddNewPoint] = useState("");
  const editedPointRef = useRef("");
  // const labelNameRef = useRef("");
  // const pointsRef = useRef("");
  const router = useRouter();
  const { categoryId } = router.query;

  const [data, setData] = useState([
    // {
    //   id: 1,
    //   label: "As an investor you should",
    //   points: [
    //     "Be a salaried member",
    //     "Have min 12 months of work experience",
    //     "Have age between 22 to 55 years",
    //     "Hold a valid bank account",
    //     "Have an identity and income proof",
    //     "Have a guarantor for a loan amount above 25k",
    //   ],
    // },
    // {
    //   id: 2,
    //   label: "Your nominee should",
    //   points: [
    //     "Be a salaried member",
    //     "Have an identity proof",
    //     "Have age less than 52 years",
    //   ],
    // },
  ]);

  const [currData, setCurrData] = useState({});

  const renderSelectedItem = (id) => {
    data.find((item) => {
      if (item.id == id) {
        setCurrData(item);
      }
    });
  };

  const openModal = () => {
    setOpenCreateLabelModal(true);
  };

  const closeModal = () => {
    if (data.length == 0) {
      router.push("/criteria-modifications");
    } else {
      setOpenCreateLabelModal(false);
      setOpenAddPointModal(false);
    }
    setEditPoint(false);
  };

  const addHandler = () => {
    // const newLabel = labelNameRef.current.value;
    // const newPoint = pointsRef.current.value;
    const newData = {
      id: Date.now(),
      label: labelName,
      points: [points],
    };
    setData([...data, newData]);
    setLabelName("");
    setPoints("");
    setOpenCreateLabelModal(false);
  };

  const openAddModal = (id) => {
    setOpenAddPointModal(true);
    setAddPointId(id);
  };

  const addPointHandler = () => {
    data.find((item) => {
      if (item.id === addPointId) {
        item.points.push(addNewPoint);
      }
    });
    setAddNewPoint("");
    setOpenAddPointModal(false);
  };

  const editHandler = (point, id) => {
    setEditPoint(true);
    setEditedPoint(point);
    setPoints(point);
    setCurrElementId(id);
  };

  const updatePointHandler = () => {
    const newPoint = points;
    const newData = [...data];
    newData.forEach((element) => {
      if (
        element.id === currElementId &&
        element.points.includes(editedPoint)
      ) {
        element.points = element.points.map((point) =>
          point === editedPoint ? newPoint : point
        );
      }
    });
    setData(newData);
    setEditedPoint("");
    setPoints("");
    setEditPoint(false);
  };

  const _categoryName = () => {
    if (categoryId) {
      const newName =
        categoryId.charAt(0).toUpperCase() +
        categoryId.slice(1).replace(/-/g, " ");
      setCategoryName(newName);
    }
  };

  useEffect(() => {
    _categoryName();
    if (data.length === 0) {
      openModal();
    }
  }, []);

  const _openDeletePointModal = (point, id) => {
    setOpenDeletePointModal(true);
    setCurrDeleteId(id);
    setToDeletePoint(point);
  };

  const _deletePoint = () => {
    const newData = [...data];
    newData.forEach((element) => {
      if (
        element.id === currDeleteId &&
        element.points.includes(toDeletePoint)
      ) {
        element.points = element.points.filter(
          (point) => point !== toDeletePoint
        );
      }
    });
    setData(newData);
    setOpenDeletePointModal(false);
  };

  return (
    <div className="bg-[#F9F9FF] w-full h-screen">
      <PageHeader title={"Criteria modifications"} />
      {openCreateLabelModal || openAddPointModal || editPoint ? (
        <CreateLabelModal
          labelName={labelName}
          setLabelName={setLabelName}
          points={points}
          setPoints={setPoints}
          addhHandler={addHandler}
          closeModal={closeModal}
          openAddPointModal={openAddPointModal}
          addPointHandler={addPointHandler}
          editPoint={editPoint}
          editedPoint={editedPoint}
          updatePointHandler={updatePointHandler}
          editedPointRef={editedPointRef}
          addNewPoint={addNewPoint}
          setAddNewPoint={setAddNewPoint}
          data={data}
        />
      ) : null}
      {openDeletePointModal ? (
        <DeleteModal
          deletePoint={_deletePoint}
          setOpenAddPointModal={setOpenDeletePointModal}
          title={"Point"}
        />
      ) : null}
      <div
        className={`flex-col w-full mt-[4rem] justify-center items-center ${
          data.length == 0 ? "hidden" : "flex"
        }`}
      >
        <div className="w-full max h-[30rem] px-10 flex flex-col gap-2">
          <div className="w-auto flex justify-between items-center">
            <div className="cursor-pointer">
              <Link
                className="flex items-center font-medium text-[.9rem] underline"
                href={"/criteria-modifications"}
              >
                <BackIcon /> Back
              </Link>
            </div>
            <button
              onClick={openModal}
              className="p-3 bg-secondary shadow-sm rounded-md text-sm font-bold text-primary"
            >
              Create label
            </button>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-[1.5rem] font-bold w-auto text-secondaryDark">
              {categoryName}
            </h1>
            <div className="w-[60%] h-[3px] bg-primary"></div>
          </div>
          <div className="w-full h-full flex gap-4 border-l-2 border-primary">
            <div className="w-[30%] flex flex-col text-sm">
              {data?.map((items) => {
                return (
                  <p
                    key={items.id}
                    onClick={() => renderSelectedItem(items.id)}
                    className={`w-full h-auto text-[1rem] ${
                      currData.label == items.label
                        ? "bg-secondary shadow-sm"
                        : null
                    } hover:bg-secondary p-1 font-semibold text-primary cursor-pointer`}
                  >
                    {items.label}
                  </p>
                );
              })}
            </div>
            <div className="w-[70%] flex flex-col gap-2">
              <h1 className="font-bold text-xl text-primary flex items-center gap-2">
                {currData?.label}:{" "}
                <div
                  onClick={() => openAddModal(currData.id)}
                  className="cursor-pointer h-6 w-6 hover:scale-110"
                >
                  <AddIcon />
                </div>
              </h1>
              <div className="max-h-[23rem] overflow-y-auto flex flex-col gap-2">
                {currData?.points?.length !== 0 ? (
                  currData?.points?.map((point) => {
                    return (
                      <tr
                        key={point}
                        className="odd:bg-[#e9f4f9] even:bg-white p-1 w-full"
                      >
                        <td className="flex items-center gap-2">
                          <div className="flex items-center gap-1 w-[80%]">
                            <div className="cursor-pointer">
                              <BulletPointIcon />
                            </div>
                            {point}{" "}
                          </div>
                          <div className="w-[20%] h-auto flex items-center justify-end gap-2">
                            <div
                              onClick={() => editHandler(point, currData.id)}
                              className="cursor-pointer text-primary hover:scale-110"
                            >
                              <EditIcon />{" "}
                            </div>
                            <div
                              onClick={() =>
                                _openDeletePointModal(point, currData.id)
                              }
                              className="text-primary cursor-pointer hover:scale-110"
                            >
                              <DeleteIcon />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <h1 className="font-medium">No points..!</h1>
                )}
              </div>
              <div className="w-full mt-2 flex justify-end">
                <button className="px-4 py-[.5rem] rounded-md bg-secondary text-primary font-semibold">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
