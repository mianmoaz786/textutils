import React, { useState } from 'react'


export default function Textform(props) {
  const ToUpperCase = () => {
    setText(text.toUpperCase())
    props.ShowAlert("Converted To UpperCase","success")
  }

  const ToLowerCase = () => {
    setText(text.toLowerCase())
    props.ShowAlert("Converted To LowerCase","success")
  }


  const Clear = () => {
    setText("")
    props.ShowAlert("Text cleared successfully!","success")
  }

  const removeExtraSpaces = () => {
    // Use regular expression to replace multiple spaces with a single space
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.ShowAlert("Extra Spaces removed successfully!","success")

  }

  const HandleChange = (event) => {
    console.log("Changed")
    setText(event.target.value);
  }

  const [text, setText] = useState("");

  return (
    <div>


      <h1>{props.heading}</h1>
      <div className="mb-3">

        <textarea onChange={HandleChange} className="form-control" value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button onClick={ToUpperCase} className='btn btn-primary '>Convert To Uppercase</button>

      <button onClick={ToLowerCase} className='btn btn-primary mx-2'>Convert To Lowercase</button>
      <button onClick={Clear} className='btn btn-primary mx-1'>Clear Text</button>
      <button className='btn btn-primary mx-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>


      <div className="container my-3" >
        <h1>Your text summary</h1>
        <p> {text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>{0.08 * text.split(" ").length || 0} Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the Textbox Above to Preview it here"}</p>
      </div>
    </div>
  )
}

