import { LogoutIcon } from "@/public/icons/icons";
import { useRouter } from "next/router";
import React, { useState } from "react";

const PageHeader = ({ title }) => {
  const router = useRouter();
  const _logoutHandler = () => {
    router.push("/login");
    sessionStorage.clear();
  };

  return (
    <div className="w-full h-11 flex justify-between items-center gap-2 px-3 py-1 bg-primary text-white font-bold text-[1.5rem] relative">
      {title}
      <div className="flex items-center cursor-pointer">
        <div onClick={_logoutHandler}>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
