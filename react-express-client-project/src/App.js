
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Router>

        {/* Navigating Routes */}
        <Link to='/'>Home</Link> |
        <Link to='/about'>About</Link> |
        <Link to='/contact'>Contact</Link> |
        <Link to='todo-list'>Todo List</Link>

        <hr/>

        {/* Configure Routes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/todo-list' Component={TodoList}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
