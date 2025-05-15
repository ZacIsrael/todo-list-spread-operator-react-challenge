import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // How to create a React app: npm create vite@latest {app-name} -- --template react
  const [count, setCount] = useState(0);

  // CHALLENGE: Make this app work by applying what you've learned.
  // 1. When new text is written into the input, its state should be saved.

  // 2. When the add button is pressed, the current data in the input should be
  // added to an array (would be a database in a real application).

  // 3. The <ul> should display all the array items as <li>s

  // inputItem keeps track of what is being typed 
  const [inputItem, setInputItem] = useState("");

  // items is the array that keeps track of all the items.
  // Its initial state is an empty array
  const [items, setItems] = useState([]);

  function handleChangedItem(event) {
    // value is what the user typed
    const { value } = event.target;

    console.log("value = ", value);
  }

  function onClickAdd(event) {
    // retrieve the button that was clicked
    let btn = event.target;
    // make the background of the button black once it's clicked
    btn.style.backgroundColor = "black";

    // turn the background back white after 0.05 seconds
    setTimeout(() => {
      btn.style.backgroundColor = "white";
    }, 50);

    console.log("onClickAdd(): ");

    setInputItem(inputItem);

    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChangedItem} type="text" />
        <button onClick={onClickAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
