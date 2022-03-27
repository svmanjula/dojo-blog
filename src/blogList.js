import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    



    return ( 
        <div className="Blog-list">
            <h2>{title}</h2>

            {blogs.map((blog) => 
            <div className="blog-preview" key={blogs.id} >
                <Link to= {`/blogs/${blog.id}`} >
                <h2>{title} </h2>
                <div>Written by {blog.author} </div>
                </Link>
                
                
                </div>
            )}</div>
     );
}
 
export default BlogList;