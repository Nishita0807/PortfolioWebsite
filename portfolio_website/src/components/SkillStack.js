import React from "react";

import Skills from "./Skills";
import {v4} from "uuid";
import {Consumer} from "../context";
function SkillStack(){
return(
    <Consumer>
        {(value)=>{
            const {skills}=value;
            console.log(v4());
            const finalSkillRow =[];
            for(let i=0; i<2; i++){
                let skillRow=skills.slice(i*4,(i+1)*4);
                finalSkillRow.push(
                    <div key={v4()} className="d-flex justify-content-around py-3">
                    {
                         skillRow.map((skills) => (
                            <Skills key={v4()} skills={skills} />
                        ))
                    }
                </div>
                  );
                }
            return(
                <div className="bg-light w-100">
                <div className="container text-center py-5">
                    <h1 className="font-weight-light">
                        <span className="text-info">Technology</span> Stack
                    </h1>
                    <div className="lead pb-5">I design, develop and deliver with these weapons.</div>
                 {finalSkillRow}   
                </div>
            </div>
        
        
            );
 
        }}
    </Consumer>
);

   

             


   
}export default SkillStack;