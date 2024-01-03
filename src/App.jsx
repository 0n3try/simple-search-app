import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./Layout/Layout";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import BlogDetails from "./components/pages/BlogDetails";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
