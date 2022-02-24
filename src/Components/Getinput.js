import React, { useState} from "react";

export default function Getinput(props) {
    // create state variables
    const[text,getText]=useState("");
    

// get input from text area on change the value
    function Getinput(e) {
    getText(e.target.value);
        
    }

    function Upper() {
      
        let newstring=text.toUpperCase();
        getText(newstring);
  
    }
    function Lower() {
        let newstring=text.toLowerCase();
        getText(newstring);
        
    }
    const ReverseString=()=>{
    const splitText=text.split("")
    const RevText=splitText.reverse().join("");
    getText(RevText);
    
   }

   const CopyFunction=()=>{
     const textbox=document.getElementById("TextBox");
      textbox.select()
      document.execCommand("copy")
      
   

   }


  return (
    <>
      <div className="container">
        <div className="form-group">
          <br />
          <h2 style={{color:props.mode.fontcolor}}>Enter Your Text Here</h2>
          <textarea id="TextBox" placeholder="Enter Text Here" value={text} onChange={Getinput} style={{color:props.mode.fontcolor,backgroundColor:props.mode.bg}} className="form-control my-2 border border-danger" rows="5"></textarea>
        </div>
        <p id="count" style={{fontWeight:"bold", color:props.mode.fontcolor}} hidden={text.length>0?false:true}>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters and  And Lines :{text.split(/\r|\r\n|\n/).length>0 && text.split(/\r|\r\n|\n/).length} Lines</p>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={Upper}>Upper Case</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={Lower}>Lower Case</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={ReverseString}>Reverse</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={CopyFunction} >Copy Text</button>
        
      </div>
    </>
  );
}
