import React, { useState } from "react";

export default function FormText(props) {
  const upperCase = () => {
    const newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("! Text change to upper case","success");
  };
  const lowerCase=()=>{
    const newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("! Text change to lower case","success");
  }
  const clearText=()=>{
    const newText=" ";
    setText(newText);
    props.showAlert("! Text is clear","success");
  }
  const copyText=()=>{
   let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("! Text Copied","success");
  }
   
  const removeExtraSpace=()=>{
   let newText=Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("! Removed Extra Space from text","success");
  }
  const changeUpper = (event) => {
    console.log("this is a change function");
    setText(event.target.value);
  };

 
  const [Text, setText] = useState("Enter text hear");
  return (
    <>
    <div  className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={changeUpper}
            id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mt-2" onClick={upperCase}> UpparCase </button>
        <button className="btn btn-primary mt-2 ms-2" onClick={lowerCase}> LowerCase </button>
        <button className="btn btn-primary mt-2 ms-2" onClick={clearText}> ClearText </button>
        <button className="btn btn-primary mt-2 ms-2" onClick={copyText}> CopyText </button>
        <button className="btn btn-primary mt-2 ms-2" onClick={removeExtraSpace}> Remove Spaces </button>
      </div>
    </div>
    <div className="container">
      <h3>TextBox summary</h3>
         <p>Total Words are {Text.split(" ").length} and Characters are {Text.length}</p>

         <h3>Preview</h3>
         <p>{Text}</p>
    </div>
    </>
  );
}
