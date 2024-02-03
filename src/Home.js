import React from 'react';
import './styles.css';
import headshot from "./headshot.jpg";
import bella from "./bella.jpg";
import AbramsFalls from "./AbramsFalls.jpg";
import treeline from "./treeline.jpg";

const Home = () => {
  const heroStyle = {
    backgroundImage: `url(${treeline})`,
    backgroundSize: 'cover', // Adjust this property to fit your needs
    backgroundPosition: 'center', // Adjust this property to fit your needs
    color: 'white', // Adjust the text color based on your background
  };
  return (
    <div>
      <div className="hero text-center" style={heroStyle}>
        <img src={headshot} alt="Ethan Hulen" className="img-fluid rounded-circle" width="150" />
        <h1 className="mt-3">Ethan Hulen</h1>
        <p className="lead">Passionate Web Developer</p>
      </div>
      <div className="bio">
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
      <div className="container">
        <div className="image text-center">
          <img src={AbramsFalls} alt="A man standing in front of a waterfall" className="img-fluid" />
          <p className="caption">I love the outdoors! I went to Great Smoky Mountains National Park in March of 2023.</p>
        </div>
        <div className="image text-center">
          <img src={bella} alt="Bella" className="img-fluid" />
          <p className="caption">This is my dog, Bella. She loves walks, treats, and eating food off the floor. She is the best dog.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
