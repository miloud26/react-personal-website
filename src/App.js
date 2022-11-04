import Navbar from "./components/navbar/Nvabar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Error from "./pages/error/Error";
import Contact from "./pages/contact/Contact";
import { useGlobalContext } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { navOpen } = useGlobalContext();

  return (
    <div className="App" style={navOpen ? {} : {}}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
