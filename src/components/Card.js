import classes from "./Card.module.css";
import Column from "./Column";
import ProjectLink from "./ProjectLink";
import githubSvg from "../svg/github.svg";
import linkedinSvg from "../svg/linkedin.svg";
import faceJpg from "../img/face.jpg";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  return (
    <div className={classes.card}>
      <Column className={classes.column1}>
        <img className={classes.photo} src={faceJpg} alt="Me" />
        <h1 className={classes.textShadow}>Kamil Słabosz</h1>
        <h2 className={classes.textShadow}>Frontend Developer</h2>
        <div className={classes.icon_row}>
          <a href="https://github.com/kamilslabosz">
            <img className={classes.icon} src={githubSvg} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/kamil-słabosz-193634222">
            <img className={classes.icon} src={linkedinSvg} alt="linkedin" />
          </a>
        </div>
      </Column>
      <Column className={classes.column2}>
        <h1>About Me</h1>
        <p className={classes.paragraph}>
          I’m a self-taught developer with broad experience in management,
          gained through working in family business as well as running a small
          business focused on sales. Skilled in establishing connections,
          creative problem solving and leading a group of people. Keen to learn
          and gain new skills and qualifications. Highly motivated.
        </p>
        <p className={classes.paragraph}>
          In my spare time I'm a movie buff and a board gamer.
        </p>
        <h1>My projects</h1>
        <ProjectLink
          href="#"
          title="Minimalist storefront"
          description="Made in react using class components."
        />
        <ProjectLink
          href="https://marvel-clicker.onrender.com/"
          title="Marvel Clicker"
          description="Very simple cookie clicker type game made with react."
        />
        <ProjectLink
          href='"https://random-training.onrender.com"'
          title="Random Training Video"
          description="Made with EJS and mongoDB."
        />
      </Column>
    </div>
  );
};

export default Card;
