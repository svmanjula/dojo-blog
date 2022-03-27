
import BlogList from "./blogList";
import useFetch from "./usefetch";


const Home = () => {
       const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
     

     
     
return ( 
        <div className="homepage">
          {error && <div>{error}</div> }
          {isPending && <div> loading</div>}
           {blogs && <BlogList blogs ={blogs} title = "All blogs"/>}
           </div>
     );
}
 
export default Home;