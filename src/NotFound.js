import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="NotFound">
            <h2>sorry</h2>
            <p>That page cannot be found</p>
            
            <Link className ="NotFoundLink" to ="/home">Back to home page.....</Link>
            </div>

      );
}
 
export default NotFound;