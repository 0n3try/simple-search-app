import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container m-t">
      <h1 className="p-2">Simple App using jsonplaceholder</h1>
      <Link className="btn btn-primary" to="/blog">
        Blog
      </Link>
    </div>
  );
};

export default Home;
