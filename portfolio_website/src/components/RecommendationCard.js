import React from "react";
import "../App.css";
import "./Popup.css";
import {useState} from "react";
import Popup from "./Popup";

//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function RecommendationCard(props){
    const [buttonPopup,setButtonPopup]=useState(false);
     
    let {name , designation  ,company, message}=props.recommendation;
    return(
        <div className="col-12 col-md-4">
            <div className="card shadow h-100">
                <div className="card-body">
                    <h4 className="card-text1" max-length='35'>{message}</h4>
                    <p className="card-text text-secondary mb-4">{name}</p>
                    <p className="card-text text-secondary">
                        {designation} at {company}

                    </p>
                    <div className="card-body" onClick={()=>setButtonPopup(true)} ></div>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} id="popup1">
                    
                    
                    <h4 className="card-text">{message}</h4>
                    <p className="card-text text-secondary mb-4">{name}</p>
                    <p className="card-text text-secondary">
                        {designation} at {company}

                    </p>
                    
                    </Popup>
                    </div>
            </div>
        </div>
        
        
      
    );
}

export default RecommendationCard;