import { selectAlert } from "app/slices/alertSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "./Loading";

const Alert = () => {
  const { loading, success, errors } = useSelector(selectAlert);
  useEffect(() => {
    if (success) {
      toast(success, { type: "success" });
    } else if (errors) {
      toast(errors, { type: "error" });
    }
  }, [errors, success]);
  return (
    <>
      {loading && (
        <div className="w-screen h-screen bg-blue-400 bg-opacity-30 absolute z-50 flex items-center justify-center">
          <Loading />
        </div>
      )}
    </>
  );
};

export default Alert;
