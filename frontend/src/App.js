import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.js";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar.js";
import NewsLetter from "./components/Pages/NewsLetter";
import BlogsLayout from "./components/Pages/BlogsLayout";
import CollegePage from "./components/Pages/College.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newsletter/:heading" element={<NewsLetter />} />
          <Route exact path="/blogs" element={<BlogsLayout />} />
          <Route exact path="/college" element={<CollegePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
