import React from "react";
import clsx from "clsx";
import s from "./Navigation.module.css";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <nav className={s.nav}>
        <h1>TravelTrucks</h1>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
