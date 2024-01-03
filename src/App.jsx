import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./Layout/Layout";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
