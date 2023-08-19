import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked on handleUpClick");
        props.showAlert("Converted to Uppercase","success");

    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");

    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");

    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");

    }
    const handleClClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");

    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
//aa nahi lkhvi to text enter nahi kari sako
// jemjem text change krshu to te nava text = {text} thshe
    }
    const [text, setText] = useState('Enter text here');
    //  setText("kdfsshgh");
  return (
    <>
    <div className="container" style={{ color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value = {text}

          onChange={handleOnChange}
        //   onChange no nakhvi to type nahi thay
        style={{ backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowecase</button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Text</button>
    </div>
    <div className="container my-3" style={{ color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
</>
    
  );
}
