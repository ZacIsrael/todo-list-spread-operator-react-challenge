import React from "react";

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

export default ToDoItem;
