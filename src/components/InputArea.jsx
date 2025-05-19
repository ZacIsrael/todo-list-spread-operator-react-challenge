import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      {/* The 'value' is set to the state (parent component), and onChange triggers the function that 
      props.inputOnChange points to. This ensures React is in full control of the input's value at all times, 
      which is the proper way to manage form inputs in React (a "controlled component").*/}
      <input value={props.inputValue} onChange={props.inputOnChange} type="text" />
      <button onClick={props.buttonOnClickAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
