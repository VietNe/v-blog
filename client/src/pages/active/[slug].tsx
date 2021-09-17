import { useAppDispatch } from "app/hook";
import { setAlert } from "app/slices/alertSlice";
import Button from "components/global/Button";
import { useParams } from "react-router-dom";
import { postAPI } from "utils/FetchData";
import { capitalizeFirstLetter } from "utils/string";
import { IParams } from "utils/types";

const ActivePage = () => {
  const { slug }: IParams = useParams();
  const dispatch = useAppDispatch();

  const activeAccount = () => {
    if (slug) {
      dispatch(setAlert({ loading: true }));
      postAPI("active", { active_token: slug })
        .then((res) => {
          dispatch(setAlert({ loading: false, success: "Active account success!" }));
        })
        .catch((err) => {
          dispatch(
            setAlert({
              loading: false,
              errors: capitalizeFirstLetter(err?.response?.data?.msg || "Active account failed!"),
            })
          );
        });
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - 96px)" }} className=" flex justify-center items-center">
      <div className="z-10 bg-white p-7 shadow-xl rounded-2xl">
        <p className="font-black text-2xl text-blue-400 mb-5"> Active your account!</p>
        <Button onClick={activeAccount} text="Active" />
      </div>
    </div>
  );
};

export default ActivePage;
