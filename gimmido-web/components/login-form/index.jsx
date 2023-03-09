import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.email !== "" && data.password !== "") {
      sessionStorage.setItem("email", data.email);
      sessionStorage.setItem("password", data.password);
      router.push("/criteria-modifications");
    }
  };

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("email");
    if (loggedIn) {
      router.push("/criteria-modifications");
    } else {
      router.push("/login");
    }
  }, []);

  const showPasswordHandler = () => {
    setPasswordShown(!passwordShown);
  };

  // const submitHandler = () => {
  //   router.push("/criteria-modifications");
  // };

  return (
    <form
      className="w-80 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-[2rem] font-bold text-primary">Login</h1>
      <div className="w-full">
        <Input
          style={{ fontWeight: "500" }}
          color={`${errors.email ? "red" : "blue"}`}
          size="lg"
          label="Email Id"
          {...register("email", {
            required: {
              value: true,
              message: "Email Id is required!",
            },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Enter valid email!",
            },
          })}
        />
      </div>
      <p className="text-sm mt-[-15px] font-medium text-alertRed">
        {errors.email ? errors.email.message : null}
      </p>
      <div className="w-full">
        <Input
          style={{ fontWeight: "500" }}
          color={`${errors.password ? "red" : "blue"}`}
          type={passwordShown ? "text" : "password"}
          size="lg"
          label="Password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required!",
            },
          })}
        />
      </div>
      <p className="text-sm mt-[-15px] font-medium text-alertRed">
        {errors.password ? errors.password.message : null}
      </p>
      <div className="flex items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <input
            id="forgot-password"
            type="checkbox"
            className=" w-[20px] h-[20px] cursor-pointer"
            onClick={showPasswordHandler}
          />
          <label
            className="cursor-pointer font-medium"
            htmlFor="forgot-password"
          >
            Show Password
          </label>
        </div>
        <p className="cursor-pointer font-medium hover:underline">
          Forgot Password
        </p>
      </div>
      <button
        type="submit"
        className="bg-secondary p-3 rounded-md text-primary font-bold mt-2"
      >
        Login
      </button>
      <p className="text-sm font-medium">
        Don't have an account yet ?{" "}
        <span className="font-bold underline cursor-pointer">
          <Link href={"/signup"}>Register here</Link>
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
