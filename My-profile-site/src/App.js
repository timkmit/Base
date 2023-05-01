import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import UnderHeader from "./components/underHeader/UnderHeader";
import ScrollToTop from "./utils/ScrollToTop";
import CombinedRender from "./infoUnderHeader/CombinedRender";
import "./styles/main.css";
import './App.css'

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
            <Route path="/contacts" element={<Contacts />} />
          </Routes>

        <Footer />
      </Router>

      
    </div>
  );
}

export default App;
