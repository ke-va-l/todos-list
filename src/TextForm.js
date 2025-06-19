import React ,{useState}from "react";

export default function TextForm(props) {

const handleUpClick =()=>{
console.log("Uppercase was Clicked");
setText("You have Clicked on handleupClick");
let newtext = text.toUpperCase();
setText(newtext)
}
const handleonchange =(event)=>{
console.log("Uppe was Clicked");
setText(event.target.value)
}

    const [text,setText] = useState("Enter Text Here");
   // setText("This is new Text");
  return (
    <>
    <div className="container">

        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Text Here
        </label>
        <textarea className = "form-control" value={text} onChange={handleonchange}  id="myBox" rows='8'></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
      
    </div>
    <div className="container my-3">

<h1>
  Your Text Summary
</h1><p>
  {text.split(" ").length} words and {text.length} characters
</p>

    </div>
    </>
  );
}
