import React from "react";
import { Link } from "react-router-dom";

export default function Card({ image, title, buttonLabel, path }) {
  return (
    <div className=" flex justify-center items-center ">
      <div className="flex flex-col items-center bg-white shadow-xl border border-gray-200 rounded-lg w-9/12 pb-2 hover:bg-green-300 ">
        <img className="rounded-t-lg w-full" src={image} alt="" />

        <div className="flex flex-col items-center w-full">
          <h5 className="text-purple-900 font-bold text-md tracking-tight mb-2">
            {title}
          </h5>

          <Link
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center shadow-md"
            to={path}
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
