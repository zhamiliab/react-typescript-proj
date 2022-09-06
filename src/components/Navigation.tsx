import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className=" w-[100%] h-[70px] flex justify-between px-8 bg-red-800 items-center text-white">
      <span className="font-bold">My React Typescript Project 2022</span>
      <span>
        <Link to="/" className="mr-4">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
}
