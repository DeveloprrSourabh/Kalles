import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Blogpage from "./pages/Blog-page";
import Singleproduct from "./pages/Singleproduct";
import Singleblog from "./pages/Singleblog";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/shop/:id" element={<Singleproduct />} />
        <Route path="/blog/:id" element={<Singleblog />} />
      </Routes>
    </>
  );
}

export default App;
