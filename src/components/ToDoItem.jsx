import React, { useState } from "react";

function ToDoItem(props) {
  // executed once the ToDo item has been clicked
  function itemClicked(event) {}

  // onChecked points to a function that was implemented in the parent component
  return (
    <li
      onClick={() => {
        // This anonymous function ensures that the following function only gets called
        // once the item has been clicked; not when it is rendered.
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

/* 
// Previous implementation (without state)

// executed once the ToDo item has been clicked
function itemClicked(event) {
  let { target } = event;

  console.log(`ToDoItem: target = `, target);

  // add a line through the item if it has been clicked;
  // remove the line if it's already there
  if (target.style.textDecoration === "line-through") {
    target.style.textDecoration = "";
  } else {
    target.style.textDecoration = "line-through";
  }
}

function ToDoItem(props) {
  return <li onClick={itemClicked}>{props.item}</li>;
}
*/

export default ToDoItem;
