import { useFetch } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data, load, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (load) {
    return <div className="container"></div>;
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
      <h1 className="m-2">Blog Using api</h1>
      <section className="list-group">
        {data.map((item) => (
          <Link to={`${item.id}`} key={item.id} className="list-group-item">
            {item.title}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Blog;
