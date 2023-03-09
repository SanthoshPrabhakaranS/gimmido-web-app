import React, { useState } from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import { BackIcon } from "@/public/icons/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showPasswordHandler = () => {
    setPasswordShown(!passwordShown);
  };

  const showConfirmPasswordHandler = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full px-16 py-14 gap-5"
    >
      <Link href={"/login"}>
        <p className="text-sm font-medium flex items-center underline cursor-pointer">
          <BackIcon className="h-3" /> Back
        </p>
      </Link>
      <h1 className="text-[2rem] font-bold text-primary mb-2">Signup</h1>
      <div className="grid grid-cols-2 gap-7 gap-x-7 w-full text-sm">
        <div className="w-full">
          <Input
            color={`${errors.fullName ? "red" : "blue"}`}
            size="lg"
            label="Full Name"
            style={{ fontWeight: "500" }}
            {...register("fullName", {
              required: {
                value: true,
                message: "Full name is required!",
              },
            })}
          />
          <p className="text-alertRed font-medium text-sm mt-1">
            {errors.fullName ? errors.fullName.message : null}
          </p>
        </div>
        <div className="w-full">
          <Input
            color={`${errors.userName ? "red" : "blue"}`}
            size="lg"
            label="Username"
            style={{ fontWeight: "500" }}
            {...register("userName", {
              required: {
                value: true,
                message: "Username is required!",
              },
            })}
          />
          <p className="text-alertRed font-medium text-sm mt-1">
            {errors.userName ? errors.userName.message : null}
          </p>
        </div>
        <div className="w-full">
          {/* <Select
            name="role"
            size="lg"
            {...register("role")}
            label="Select Role"
            style={{ fontWeight: "500" }}
          >
            <Option value="Borrower">Borrower</Option>
            <Option value="Investor">Investor</Option>
          </Select> */}
          <select
            className="h-auto w-full p-3 bg-white border border-[#B0BEC5] rounded-lg appearance-none outline-[#2899F3] text"
            name="role"
            {...register("role", {
              required: {
                value: true,
                message: "Role is required!",
              },
            })}
          >
            <option value="Select role">Select role</option>
            <option value="Borrower">Borrower</option>
            <option value="Investor">Investor</option>
          </select>
          <p className="text-alertRed font-medium text-sm">
            {errors.role ? errors.role.message : null}
          </p>
        </div>
        <div className="w-full">
          <Input
            color={`${errors.email ? "red" : "blue"}`}
            size="lg"
            style={{ fontWeight: "500" }}
            label="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required!",
              },
            })}
          />
          <p className="text-alertRed font-medium text-sm mt-1">
            {errors.email ? errors.email.message : null}
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            color={`${errors.password ? "red" : "blue"}`}
            size="lg"
            style={{ fontWeight: "500" }}
            label="Password"
            type={passwordShown ? "text" : "password"}
            {...register("password", {
              required: {
                value: true,
                message: "Password is required!",
              },
            })}
          />
          <p className="text-alertRed font-medium text-sm">
            {errors.password ? errors.password.message : null}
          </p>
          <div className="flex items-center gap-2">
            <input
              id="password"
              type="checkbox"
              className=" w-[20px] h-[20px] cursor-pointer"
              onClick={showPasswordHandler}
            />
            <label className="cursor-pointer font-medium" htmlFor="password">
              Show Password
            </label>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            color={`${errors.confirmPassword ? "red" : "blue"}`}
            size="lg"
            style={{ fontWeight: "500" }}
            label="Confirm Password"
            type={confirmPasswordShown ? "text" : "password"}
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm password is required!",
              },
            })}
          />
          <p className="text-alertRed font-medium text-sm">
            {errors.confirmPassword ? errors.confirmPassword.message : null}
          </p>
          <div className="flex items-center gap-2">
            <input
              id="confirm-password"
              type="checkbox"
              className=" w-[20px] h-[20px] cursor-pointer"
              onClick={showConfirmPasswordHandler}
            />
            <label
              className="cursor-pointer font-medium"
              htmlFor="confirm-password"
            >
              Show Password
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="px-[5rem] py-4 bg-secondary text-[1rem] font-semibold mt-2 text-primary rounded-md"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
