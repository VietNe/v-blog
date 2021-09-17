import { MouseEventHandler } from "react";

interface IButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ onClick, text }: IButtonProps) => {
  return (
    <button
      {...{ onClick }}
      type="submit"
      className="w-full flex justify-center bg-blue-400 hover:bg-blue-300 text-gray-100 p-3 rounded-full font-semibold shadow-lg"
    >
      {text}
    </button>
  );
};

export default Button;
