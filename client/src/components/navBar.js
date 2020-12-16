import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <header className="App-header">
      <Navbar expand="sm" bg="dark" variant="dark">
      
        {/*---Logo icon image --- */}
        <Navbar.Brand href="/">
          <div className="wrap-Brand">
            <h2 className="logoName"> iTunes </h2>
          </div>
        </Navbar.Brand>

        {/*---page navigation links --- */}
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="nav-text">
            <Nav className="mr-auto">
            <Link to="/movies" className="link">
                Movies
              </Link>
              <Link to="/music" className="link">
                Music
              </Link>
              <Link to="/audiobooks" className="link">
                Audio Books
              </Link>
              <Link to="/videos" className="link">
                Videos
              </Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
        
      </Navbar>

      <div className="welcome-text">
        <h1>iTunes API Search</h1>
      </div>
    </header>
  );
}

export default NavBar;
