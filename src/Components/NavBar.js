import React from "react";

export default function NavBar(props) {
 if(props.mode.type==="dark")
 {
   document.body.style.backgroundColor="#231d3e";
 }
 else{ document.body.style.backgroundColor="#d6d0f3";}
  return (
    <>
    <div  style={{backgroundColor:props.mode.navbg,outerHeight:"4rem"}}>
    <div id="navitem" className="form-check form-switch text-light" style={{border:"1px solid white"}}>
              <input
                className="form-check-input nightmode"
                type="checkbox"
                onChange={props.GetToggle}
              />
              <label className="form-check-label">{props.mode.type==="dark"?"Disable":"Enable"} Dark Mode</label>
          </div>

    </div>
    </>
  );
}
