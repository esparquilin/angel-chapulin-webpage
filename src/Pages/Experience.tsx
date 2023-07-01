import classes from "./Experience.module.css";

import refugiocanino from "../assets/images/refugiocanino.png";

const Experience = () => {
  return (
    <div className={classes.section}>
      <h1>Experience</h1>
      <div className={classes.container}>
        <div className={classes.description}>
          <a
            href="https://refugiocaninomimejoramigo.org/"
            className={classes.link}
          >
            <h2>
              Refugio canino <span>"Mi mejor amigo"</span>
            </h2>
          </a>
          <ul>
            <li>Development a multi-page website using ReactJS</li>
            <li>Backend implementation using NodeJS & ExpressJS</li>
            <li>
              Mobile app multi-platform (iOS & Android) made with React Native
            </li>
            <li>WebPage Hosting with Firebase Hosting</li>
            <li>NoSQL database implementation using MongoDB with Mongoose</li>
            <li>Backend Hosting using AWS EC2 (Ubuntu)</li>
            <li>Cloud functions and image compression using AWS S3</li>
          </ul>
        </div>
        <a
          href="https://refugiocaninomimejoramigo.org/"
          className={classes.link}
        >
          <img
            className={classes.image}
            alt="Refugio canino mi mejor amigo"
            src={refugiocanino}
          />
        </a>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Experience;
