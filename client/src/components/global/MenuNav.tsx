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
          activeClassName="bg-gray-600 text-white"
          key={item.name}
          to={item.path}
          className=" hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

export default MenuNav;
