import * as React from "react";

function MenuItem(props) {
  return (
    <div className="px-4 py-2 text-xl transition rounded-3xl dark:hover:bg-white hover:bg-gray-400 hover:bg-opacity-20">
      {props.children}
    </div>
  );
}

export default MenuItem;
