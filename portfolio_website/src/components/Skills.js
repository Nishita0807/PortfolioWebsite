import React from "react";
import {v4} from "uuid";
function Skills(props){
    const{name,imageUrl,starsTotal,starsActive}=props.skills;
    const starsList =[];
    for(let i=0;i<starsTotal;i++){
        if(i<starsActive){
            starsList.push(<span key={v4()} className="text-info">*</span>);
        }else{
            starsList.push(<span key={v4()}>*</span>);
        } 
    }
    return(
        <div>
        <img src={imageUrl} alt={name} class="rounded-circle" style={{width: "100px" ,height: "100px"}}/>
        <div>
            {starsList}
        </div>
    </div>
    );
}export default Skills;