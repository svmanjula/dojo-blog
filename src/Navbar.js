import {Link} from "react-router-dom";


const  Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <Link to="/Home" className="links">Home</Link>
    
            <Link to="/create">New Blog</Link>
            
            </nav>
      );
}
 
export default Navbar ;
