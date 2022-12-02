"use client";

import * as React from "react";
import clsx from "clsx";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        props.fullWidth && "w-full justify-center ",
        props.color === "secondary"
          ? "text-white bg-gray-600"
          : "dark:text-black dark:bg-white dark:hover:bg-white bg-sky-600 hover:bg-sky-500 text-white",
        !props.condensed ? "text-lg" : "text-sm",
        "flex items-center font-bold px-4 py-2 rounded-3xl"
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
