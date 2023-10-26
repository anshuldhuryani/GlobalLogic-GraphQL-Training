
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Router>

        {/* Navigating Routes */}
        <Link to='/'>Home</Link> |
        <Link to='/about'>About</Link> |
        <Link to='/contact'>Contact</Link>

        <hr/>

        {/* Configure Routes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
