import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import UnderHeader from "./components/underHeader/UnderHeader";
import ScrollToTop from "./utils/ScrollToTop";
import CombinedRender from "./infoUnderHeader/CombinedRender";
import "./styles/main.css";
import './App.css'
import Categories from "./pages/Categories";
import About from "./pages/About";
import Documents from "./pages/Documents";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
          <UnderHeader/>
          <Routes>
            <Route path="/" element={<CombinedRender/>}/>
            <Route path="/project/:id" element={<Project />} />
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/documents" element={<Documents/>}/>
          </Routes>

        <Footer />
      </Router>

      
    </div>
  );
}

export default App;
