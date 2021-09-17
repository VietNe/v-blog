import { useState } from "react";
import { useForm } from "react-hook-form";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Button from "components/global/Button";
import { useAppDispatch } from "app/hook";
import { signUp } from "app/slices/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { capitalizeFirstLetter } from "utils/string";

type FormData = {
  account: string;
  password: string;
  cf_password: string;
  name: string;
};

const schema = yup.object().shape({
  name: yup.string().min(5).required(),
  account: yup.string().email().required(),
  password: yup.string().min(6).max(30).required(),
  cf_password: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);
  const dispatch = useAppDispatch();
  const onRegister = async (form: FormData) => {
    const { name, account, password } = form;
    dispatch(signUp({ name, account, password }));
  };
  return (
    <div className="space-y-5">
      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700 tracking-wide">
          Full Name
        </label>
        <input
          id="name"
          className=" w-full text-base px-4  h-12 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
          type="text"
          placeholder="Enter your full name"
          {...register("name")}
        />
        {errors.name && (
          <div className="text-sm text-red-400 ">
            {capitalizeFirstLetter(errors.name?.message || "")}
          </div>
        )}
      </div>
      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="account" className="text-sm font-medium text-gray-700 tracking-wide">
          Email
        </label>
        <input
          id="account"
          className=" w-full text-base px-4  h-12 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
          type="text"
          placeholder="Enter your email"
          {...register("account")}
        />
        {errors.account && (
          <div className="text-sm text-red-400 ">
            {capitalizeFirstLetter(errors.account?.message || "")}
          </div>
        )}
      </div>
      {/* Password */}
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
        {errors.password && (
          <div className="text-sm text-red-400 ">
            {capitalizeFirstLetter(errors.password?.message || "")}
          </div>
        )}
      </div>
      {/* Confirm password */}
      <div className="space-y-2">
        <label
          htmlFor="cf_password"
          className="mb-5 text-sm font-medium text-gray-700 tracking-wide"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            className="w-full content-center text-base px-4 pr-12 h-12 border 
       border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
            type={typePass ? "text" : "password"}
            id="cf_password"
            placeholder="Enter your password"
            {...register("cf_password")}
          />
          <small
            className="absolute right-3 top-3 hover:opacity-70 hover:text-blue-400 cursor-pointer transition ease-in duration-300"
            onClick={() => setTypeCfPass(!typeCfPass)}
          >
            {typeCfPass ? (
              <EyeOffIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <EyeIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </small>
        </div>
        {errors.cf_password && (
          <div className="text-sm text-red-400 ">
            {capitalizeFirstLetter(errors.cf_password?.message || "")}
          </div>
        )}
      </div>
      {/* End form */}
      <Button onClick={handleSubmit(onRegister)} text="Sign Up" />

      {/* Register link */}
      <div className="text-sm">
        Already have an account?
        <Link to="/login" className="hover:text-blue-300 ml-1 font-semibold">
          Login Now
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
