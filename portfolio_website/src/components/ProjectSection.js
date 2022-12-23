import React from "react";
import ProjectCard from "./ProjectCard";
import {Consumer} from "../context";
import {Link} from "react-router-dom";
function ProjectSection(){
   return(
    <Consumer>
    {(value)=>{
        const {projects}=value;
        return(
            <div className="container my-5 text-center">
            <h1 className="font-weight-light">
                My <span class="text-info">Projects</span>
            </h1>
            <div className="lead">I bulid products.Just like this website</div>
            <div className="row my-5 pt-3">
                {
                        projects.slice(0,3).map((project) => (
                            <div key={project.id} className="col-12 col-md-4 my-2">
                                <ProjectCard project={project} />
                            </div>
            
                ))
    
                }
            
                  
                    </div>
            <div className="my-5">
                <Link to="/all-projects" className="text-dark text-right">
                    <h5>
                        See my Projects
                        <i className="fas fa-arrow-right align-middle"></i>
                    </h5>
                </Link>
            </div>
        </div>
        );

    }}
   </Consumer> 
        
   );
       
       
       
   

        

    
}export default ProjectSection;