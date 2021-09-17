import RegisterForm from "components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center" style={{ minHeight: "calc(100vh - 96px)" }}>
      <div className="p-8 bg-white rounded-2xl w-full z-10 shadow-lg sm:w-96 my-5 mx-3">
        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
          <p className="text-gray-500">Create a new account.</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
