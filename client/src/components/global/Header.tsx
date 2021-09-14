import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import MenuNav from "./MenuNav";
import ProfileDropdown from "./ProfileDropdown";
import Search from "./Search";

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            {/* Start nav */}
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Start: Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/">
                    <div className="text-white text-3xl font-black  lg:hidden block ">VB</div>
                  </NavLink>
                  <NavLink to="/">
                    <div className="text-white text-3xl font-black hidden lg:block">V-Blog</div>
                  </NavLink>
                </div>
                {/* End: Logo */}
                <Search />
                <div className="hidden sm:flex sm:ml-6 items-center">
                  <div className="flex space-x-4 text-gray-300">
                    <MenuNav />
                  </div>
                </div>
              </div>
              {/* Start user profile */}
              <ProfileDropdown />
              {/* End user profile */}
            </div>
            {/* End nav */}
          </div>

          {/* Mobile */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-gray-300 flex flex-col">
              <MenuNav />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
