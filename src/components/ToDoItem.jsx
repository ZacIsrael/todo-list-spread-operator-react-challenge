import React, { useState } from "react";

function ToDoItem(props) {
  // Manage the state of the ToDo item. Default is set to false
  // (the todo item has not been completed yet which means that it
  // will not have a line through it)
  const [isDone, setIsDone] = useState(false);

  // executed once the ToDo item has been clicked
  function itemClicked(event) {

    setIsDone((prevValue) => {
      // if it's true, set it to false & vice versa.
      return !prevValue;
    });
  }

  return (
    // ternary operator will add or remove the line-through decoration depending on the value of the isDone boolean
    <li onClick={itemClicked} style={{ textDecoration: isDone ? "line-through" : "none" }}>
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
