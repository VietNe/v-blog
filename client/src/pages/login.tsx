import LoginPass from "components/auth/LoginPass";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div className="flex justify-center self-center z-10 shadow-lg">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
            <p className="text-gray-500">Please sign in to your account.</p>
          </div>
          <LoginPass />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
