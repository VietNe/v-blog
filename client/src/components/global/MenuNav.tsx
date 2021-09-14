import { NavLink } from "react-router-dom";
const navigation = [
  { name: "Login", path: "/login", current: true },
  { name: "Register", path: "/register", current: false },
];
const MenuNav = () => {
  return (
    <>
      {navigation.map((item) => (
        <NavLink
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
