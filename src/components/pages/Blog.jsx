import { useFetch } from "../../hooks/UseFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  const [search, setSearch] = useSearchParams();
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

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearch({ filter });
    } else {
      setSearch({});
    }
  };

  return (
    <div className="container">
      <h1 className="my-2">Blog Using api</h1>
      <input
        type="text"
        className="form-control my-3"
        onChange={handleChange}
        value={search.get("filter") || ""}
      />
      <section className="list-group">
        {data
          .filter((item) => {
            let filter = search.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name = filter.toLowerCase();
          })
          .map((item) => (
            <Link to={`${item.id}`} key={item.id} className="list-group-item">
              {item.title}
            </Link>
          ))}
      </section>
    </div>
  );
};

export default Blog;
