import Link from "next/link";
import React from "react";
import { BiCategory } from "react-icons/bi";
import PageHeader from "../page-header";

const SideBar = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-20 h-screen border-r-2 drop-shadow-sm flex flex-col justify-start px-2 py-5">
        <div>
          <h1 className="text-md font-bold mb-3 text-primary">Gimmido</h1>
        </div>
        <div
          className="w-full flex justify-center items-center bg-secondary p-2 cursor-pointer rounded-lg"
          title="criteria-modifications"
        >
          <Link href={"/criteria-modifications"}>
            <BiCategory className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <main className="w-full h-full">{children}</main>
    </div>
  );
};

export default SideBar;
