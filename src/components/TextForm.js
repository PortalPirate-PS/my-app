import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =() => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","Success");
    }
    const handleLoClick =() => {
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","Success");
    }
    const handleClearClick =() => {
    let newText ='';
    setText(newText)
    props.showAlert("Text cleared!","Success");
    }

    const handleOnChange =(event) => {
        //console.log("On change");
        setText(event.target.value);
        }
    const [text, setText] =useState('');
    //text= "New text";   // Wrong way to change the state
   // setText("New text"); // COrrect way to change the state
    
    return (
        <>
        <div className="container" style={{color:props.mode==='dark' ? 'white':'#041c4e'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey':'white', color:props.mode==='dark' ? 'white':'#041c4e'}} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="contaner my-3" style={{color:props.mode==='dark' ? 'white':'#041c4e'}}>

            <h3>Your text summary </h3>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2> Preview</h2>
            <p>{text.length>0?text:"Enter your text above to preview"}</p>
        </div>
        </>
    )
}
