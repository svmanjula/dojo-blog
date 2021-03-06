import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    const[title, setTitle] = useState("");
    const[body, setBody] = useState("");
    const[author, setAuthor] = useState("mario")
    const[isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault()
        const blog ={title,body,author};
   
        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"content-Type": "application/json"},
            body:JSON.stringify(blog)

        })
        .then(() =>{
            console.log("new blog  added")
            setIsPending(false);
            history.push('/home')
        })

      

    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit} >
             <label>Blog Title</label>
                <input type="text"
                required 
                value ={title}
                onChange = {(event) => setTitle(event.target.value)}
                />

                <label>Blog body</label>
                <textarea
                required
                value={body}
                onChange = {(event)=> setBody(event.target.value)}
                ></textarea>

                <label>Blog Author:</label>
                <select
                valur={author}
                onChange = {(event)=> setAuthor(event.target.body)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding blog....</button>}
                
            </form>
            </div>
     );
}
 
export default Create;