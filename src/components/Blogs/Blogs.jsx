import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const blogs = useLoaderData();
    const articles = blogs.articles;
    return (
        <div className="mt-10">
           {
            articles.map((article, index) => <Blog key={index} blog={article}/> )
           }
        </div>
    );
};

export default Blogs;