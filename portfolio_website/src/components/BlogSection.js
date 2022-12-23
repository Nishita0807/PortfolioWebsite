import {Link} from "react-router-dom";
import {Consumer} from "../context";
import React from "react";
import BlogCard from "./BlogCard";

function BlogSection(){
    return(
        <Consumer>
            {(value)=>{
                const {blogs}=value;
                return(
                    <div className="container my-5 text-center">
                    <h1 className="font-weight-light">
                        Latest <span class="text-info">Blogs</span>
                    </h1>
                    <div className="lead">I share my views on technologies in these blogs</div>
                    <div className="row my-5 pt-3">
                {
                        blogs.slice(0,3).map((blog) => (
                            <div key={blog.id} className="col-12 col-md-4 my-2">
                                <BlogCard blog={blog} />
                            </div>
            
                ))
    
                }
            
                  
                    </div>
                   
                    <div className="my-5">
                    <Link to="/all-blogs" className="text-dark text-right">
                            <h5>
                                See more Blogs
                                <i className="fas fa-arrow-right align-middle"></i>
                            </h5>
                        </Link>
                    </div>
                </div>
                );


            }}
        </Consumer>

    );
    
                
}export default BlogSection;