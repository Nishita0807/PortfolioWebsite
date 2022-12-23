import React from "react";
import {Link} from "react-router-dom";
function BlogCard(props){
    const {id,title,excerpt,imageUrl}=props.blog;
    return(
        <div className="card shadow h-100">
                    <img src={imageUrl} alt="free" className="card-img-top" />
                    <div className="card-body">
                        <h4 className="card-title">
                            {title}
                        </h4>
                        <p className="card-text">{excerpt}</p>
                        <Link to={`/blog/${id}`} className="stretched-link">Nishita</Link>
                    </div>

                </div> 
    );
}export default BlogCard;