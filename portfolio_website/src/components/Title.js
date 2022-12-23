import React from "react";
import Nishita from "../assets/nishita.jpeg";
function Title(){
    return(
        <div className="container">
        <div className="row text-center align-items-center my-5 py-5">
            <div className="col-12 col-md-6">
                <img src={Nishita} alt="nishita rani" className="img-fluid rounded-circle w-75"/>
            </div>
            <div className="col-12 col-md-6 pt-5">
                <div className="font-weight-light" style={{fontSize : "50px"}}>
                Hi, I am <span className="text-info">Nishita Rani</span>
            </div>
            <h4 className="font-weight-light">I am a programmer from India</h4>
            </div>
        </div>
    </div>


    );
}
export default Title;