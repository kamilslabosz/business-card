import classes from "./Card.module.css";
import Column from "./Column";
import ProjectLink from "./ProjectLink";
import githubSvg from "../svg/github.svg";
import linkedinSvg from "../svg/linkedin.svg";
import faceJpg from "../img/face.jpg";

const Card = (props) => {
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
          For seven years of my professional career, I focused mainly on
          wholesale sales and gained extensive experience in building
          relationships with customers. However, for the last year I have
          focused my efforts on the technical aspects of the company's
          activities, which allowed me to gain knowledge and skills in creating
          websites and online sales. This change reflects my ability to adapt to
          new challenges and constantly develop competences in various areas.
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
          href="/marvel-clicker"
          title="Marvel Clicker"
          description="Very simple cookie clicker type game made with react."
        />
        <ProjectLink
          href="/random-training"
          title="Random Training Video"
          description="Made with EJS and mongoDB.
          WARNING: Takes a long time to load due to hosting on render.com "
        />
      </Column>
    </div>
  );
};

export default Card;
