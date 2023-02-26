import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Background from "../src/assets/bg.png";
import "./App.css";

function App() {
  const mystyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    loading: "lazy",
    backgroundAttachment: "fixed",
  };
  return (
    <div className="app-Box" style={mystyle}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
