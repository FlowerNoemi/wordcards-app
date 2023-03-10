import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import New from "./page/New";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme/Theme";
import Background from "../src/assets/bg.png";
import "./App.css";

function App() {
  const mystyle = {
    backgroundImage: `url(${Background})`,
    loading: "lazy",
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app-Box" style={mystyle}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
