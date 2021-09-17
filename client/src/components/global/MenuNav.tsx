import { MutableRefObject } from "react";
import { NavLink } from "react-router-dom";
const navigation = [
  { name: "Login", path: "/login", current: true },
  { name: "Register", path: "/register", current: false },
];

interface IMenuNavProps {
  close?: (focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>) => void;
}

const MenuNav = ({ close }: IMenuNavProps) => {
  return (
    <>
      {navigation.map((item) => (
        <NavLink
          onClick={() => {
            if (close) close();
          }}
          activeClassName="text-blue-400"
          key={item.name}
          to={item.path}
          className=" hover:text-blue-400 px-3 py-2 rounded-md text-sm font-bold "
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

export default MenuNav;
