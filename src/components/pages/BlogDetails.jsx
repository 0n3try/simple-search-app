import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const param = useParams();
  const { data, load, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${param.id}`
  );

  if (load) {
    return (
      <div className="container">
        <h2>... Loading</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p className="--bs-danger">Error</p>
        <Link to="/" className="btn btn-danger">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Link to="/blog" className="btn btn-primary">
        Back To Blog
      </Link>
    </div>
  );
};

export default BlogDetails;
