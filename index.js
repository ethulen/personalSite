import React from 'react';
import Resume from './Resume';
import Math from './Math';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Ethan Hulen</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#math-function">Math Function</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="hero">
        <Container className="text-center">
          <img src="headshot.jpg" alt="My Picture" className="img-fluid rounded-circle" width="150" />
          <h1 className="mt-3">Ethan Hulen</h1>
          <p className="lead">Web Developer</p>
        </Container>
      </div>

      {/* Resume Section */}
      <section id="resume" className="py-5">
        <div className="container">
          <Resume />
        </div>
      </section>
      
      {/* Math Function Section */}
      <section id="math-function" className="bg-light py-5">
        <div>
          <Math/>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Ethan Hulen</p>
      </footer>
    </div>
  );
}

export default App;
