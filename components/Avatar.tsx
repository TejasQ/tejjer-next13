import * as React from "react";

function Avatar(props) {
  return (
    <img
      className="rounded-full"
      width={props.size || 40}
      alt={props.alt}
      src={props.url}
    />
  );
}

export default Avatar;
