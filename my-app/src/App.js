import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import Search from './search.js';
import Saved from './savedBooks.js';
import './App.css';

function App() {
  return (
    <Router>
     <div className="App">

       <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand src="/">
            <h3>
              Google Books
            </h3>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/" className="item">Search Books</Nav.Link>
          <Nav.Link href="/saved" className="item">Saved Books</Nav.Link>

        </Nav>

       </Navbar>

       <Route exact path="/" component={Search} />
       <Route path="/saved" component={Saved} />

     </div>
    </Router>
  );
}

export default App;
