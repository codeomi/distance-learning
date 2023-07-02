import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.js";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar.js";
import NewsLetter from "./components/Pages/NewsLetter";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newsletter/:heading" element={<NewsLetter />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
