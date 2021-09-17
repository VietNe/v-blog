import LoginPass from "components/auth/LoginPass";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center" style={{ minHeight: "calc(100vh - 96px)" }}>
      <div className="p-8 bg-white rounded-2xl w-full z-10 shadow-lg sm:w-96 my-5 mx-3">
        <div className="mb-4">
          <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
          <p className="text-gray-500">Please sign in to your account.</p>
        </div>
        <LoginPass />
      </div>
    </div>
  );
};

export default LoginPage;
