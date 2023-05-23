import React from "react";
import "./outer.css";
import logo from "./image.png";

function Outer(){
    return(
        <div className="outers">
            <div className="inners">
                <img src={logo} alt="Bar Code"/>
            </div>

            <h1>
                Improve your front-end skill by building projects
            </h1>

            <h2>
                Scan the QR code to visit Frontend Mentor and take your
                coding skills to the next level
            </h2>
        </div>
      
    )
  }
  export default Outer;