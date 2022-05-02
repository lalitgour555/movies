import React from "react";
  import {
    BrowserRouter as Router,
    
    Route,
    Link
  } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/">Bollywood</Link>
            </li>
            <li>
              <Link to="/users">Hollywood</Link>
            </li>
            <li>
              <Link to="/users">Series</Link>
            </li>
            <li>
              <Link to="/users">Episode</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}