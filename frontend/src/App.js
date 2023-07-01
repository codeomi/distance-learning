import "./App.css";
import Home from "./components/Home/Home.js"
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar.js";

function App() {
  return (
    <>
    <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
