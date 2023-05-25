import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!!", "success")
    };
    const handleloClick = () => {
        // console.log("UpperCase Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!!", "success")

    };
    const handleClearClick = () => {
        // console.log("UpperCase Was Clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!!", "success")
    };
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleUpClick}> Convert to UpperCase</button>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleloClick}> Convert to lowerCase</button>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleClearClick}> Clear Text </button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text here</h3>
                <p>{text.split(' ').length} words {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter something in the text box above to preview it.'}</p>
            </div>
        </>
    )
}
