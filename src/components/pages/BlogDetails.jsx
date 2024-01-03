import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/UseFetch";

const BlogDetails = () => {
  const param = useParams();
  const { data, load, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${param.id}`
  );

  if (load) {
    return (
      <div className="container">
        <h2>... Load</h2>
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
    <div className="container">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default BlogDetails;
