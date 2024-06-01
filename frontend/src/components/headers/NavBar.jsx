import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [navBg, setNavBg] = useState("bg-[#15151580]");
  const navLinks = [
    { name: "Home", route: "/" },
    { name: "Instructors", route: "/instructors" },
    { name: "Classes", route: "/classes" },
  ];
  return (
    <nav>
      <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
        <div className="px-4 py-4 flex items-center justify-between">
          {/*Logo*/}
          <div>
            <h1 className="text-2xl inline-flex gap-3 items-center font-bold">
              CourseMaster{" "}
              <img src="/yoga-logo.png" alt="logo" className="w-8 h-8" />
            </h1>
            <p className="font-bold text-[13px] tracking-[8px]">
              Quick Explore
            </p>
          </div>
          {/*Mobile menu icons*/}
          {/*Nav Links*/}
          <div className="hidden md:block text-black dark:text-white">
            <div className="flex">
              <ul className="ml-10 flex items-center space-x-4 pr-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.route}
                      className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-secondary"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-secondary duration-300`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                {/*Based on users*/}
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `font-bold ${
                        isActive
                          ? "text-secondary"
                          : `${
                              navBg.includes("bg-transparent")
                                ? "text-white"
                                : "text-black dark:text-white"
                            }`
                      } hover:text-secondary duration-300`
                    }
                  >
                    Login
                  </NavLink>
                </li>
                {/*Color toggle*/}
                <li>Light / Dark</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
