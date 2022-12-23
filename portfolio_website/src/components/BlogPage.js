import React from "react";
import {useParams} from "react-router-dom";
// import ProjectCard from "./ProjectCard";
function BlogPage(props){
    const {id}=useParams();
    
    return(
        <div className="py-5 my-5">
            <h1>Blog {id}</h1>
        </div>
        );
    
}export default BlogPage;