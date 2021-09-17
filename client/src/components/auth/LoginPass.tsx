import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Button from "components/global/Button";
import { useAppDispatch } from "app/hook";
import { login } from "app/slices/authSlice";

type FormData = {
  account: string;
  password: string;
};

const LoginPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [typePass, setTypePass] = useState(false);
  const dispatch = useAppDispatch();
  const onLogin = async (form: FormData) => {
    console.log(form);
    dispatch(login(form));
  };
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="account" className="text-sm font-medium text-gray-700 tracking-wide">
          Email / Phone Number
        </label>
        <input
          id="account"
          className=" w-full text-base px-4  h-12 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
          type="text"
          placeholder="Enter your email / phone number"
          {...register("account")}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
          Password
        </label>
        <div className="relative">
          <input
            className="w-full content-center text-base px-4 pr-12 h-12 border 
       border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
            type={typePass ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          <small
            className="absolute right-3 top-3 hover:opacity-70 hover:text-blue-400 cursor-pointer transition ease-in duration-300"
            onClick={() => setTypePass(!typePass)}
          >
            {typePass ? (
              <EyeOffIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <EyeIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </small>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
          />
          <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <Link to="/forgot-password" className="hover:text-blue-300">
            Forgot your password?
          </Link>
        </div>
      </div>
      {/* Register link */}
      <div className="text-sm">
        Don't have an account?
        <Link to="/register" className="hover:text-blue-300 ml-1 font-semibold">
          Register Now
        </Link>
      </div>
      {/* End form */}
      <Button onClick={handleSubmit(onLogin)} text="Sign In" />
    </div>
  );
};

export default LoginPass;
