import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Home = () => <h2>Welcome to Learning REACT JS</h2>;
const About = () => <h2>Establish a mission statement.
Outline your company story.
Reveal how you've evolved.
State your “aha!” moment.
Explain whom you serve.
Explain what you're offering them.
Cite examples of whom you've served.
Describe your values.</h2>;
const Contact = () => <h2>What do you write in contact us?
A good contact form should include 1 or 2 fields. The phone number and perhaps a name. That's it.
If it's at the top of the funnel, you can create as many leads as possible. ...
If it's in the middle of the funnel, you need to explain to your visitor why your product or service is the best option to solve their problem.</h2>;

function Myskill1(){
  return ( 
    <Router>
        <div className="container d-flex justify-content-center align-content-center">
        <nav>
        <ul >
          <li><Link to="/">Introduction</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        </div>
    </Router>
  );
}

export default Myskill1;
