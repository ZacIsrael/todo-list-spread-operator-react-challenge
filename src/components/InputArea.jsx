import React, { useState } from "react";

function InputArea(props) {
  // inputItem keeps track of what is being typed
  const [inputItem, setInputItem] = useState("");

  // executes when a change is made
  function handleChangedItem(event) {
    // value is what the user typed
    const { value } = event.target;

    console.log("value = ", value);

    // Save the new value from the input field into state,
    // so React can keep track of what's currently typed in the box
    setInputItem(value);
  }
  return (
    <div className="form">
      <input value={inputItem} onChange={handleChangedItem} type="text" />
      <button
        // Creating this anonymous function allows for parameters to be passed to the function
        // stored in the props parameter. If it wasn't for the anonymous function, the function
        // stored in the props parameter would be executed as soon as this component has been rendered
        onClick={async () => {
          await props.buttonOnClickAdd(inputItem);

          // Clear the input field after adding the item, so the user can type a new one.
          setInputItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
