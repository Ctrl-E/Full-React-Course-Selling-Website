import { Outlet } from "react-router-dom";
import { NavBar } from "../components/headers/NavBar";

export const MainLayout = () => {
  return (
    <main className="red:bg-black overflow-hidden">
      <NavBar />
      <Outlet />
      <footer>Footer</footer>
    </main>
  );
};
