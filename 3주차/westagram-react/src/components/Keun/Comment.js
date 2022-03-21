import React, { useState } from "react";

function Comment(props) {
  return (
    <>
      <div>
        <li>
          <span>{props.id}</span>
          <span>{props.name}</span>
          <span>{props.comment}</span>
        </li>
      </div>
    </>
  );
}

export default Comment;
