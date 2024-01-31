import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import './App.css'

const Home = () => {
  return (
    <div>
      <div className="hero">
        <Container className="text-center">
          <img src="headshot.jpg" alt="My Picture" className="img-fluid rounded-circle" width="150" />
          <h1 className="mt-3">Ethan Hulen</h1>
          <p className="lead">Passionate Web Developer</p>
        </Container>
      </div>
      <div>
        <p>
          Welcome to my personal website! I'm Ethan Hulen, and I have a deep passion for crafting exceptional web experiences. With a background in Computer Science from Kansas State University, I've honed my skills in both front-end and back-end technologies.
        </p>
        <p>
          My journey in web development started with a curiosity for creating interactive and visually appealing websites. Over the years, I've gained expertise in technologies such as React, Python, Java, and more. I enjoy turning ideas into reality through clean and efficient code.
        </p>
        <p>
          Whether it's building responsive user interfaces or designing robust backend systems, I thrive on the challenges that web development presents. Explore my portfolio to see some of the exciting projects I've worked on, and feel free to get in touch if you have a project in mind or just want to connect!
        </p>
      </div>
    </div>
  );
};

export default Home;
