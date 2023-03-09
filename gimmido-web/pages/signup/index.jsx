import React from "react";
import Image from "next/image";
import LogoImg from "../../public/images/logo.jpg";
import SignupForm from "@/components/signup-form";

const SignupPage = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="bg-gray-300 w-[33%]">
        <Image className="w-full h-full object-cover" src={LogoImg} alt="logo" />
      </div>
      <div className="w-[67%] h-screen flex justify-center items-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
