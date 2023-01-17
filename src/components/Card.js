import classes from "./Card.module.css";
import Column from "./Column";
import ProjectLink from "./ProjectLink";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <Column className={classes.column1}>
        <img
          className={classes.photo}
          src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
          alt="Me"
        />
        <h1>Kamil Słabosz</h1>
        <h2>Frontend Developer</h2>
        <div className={classes.icon_row}>
          <img
            className={classes.icon}
            src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png"
            alt="github"
          />
          <img
            className={classes.icon}
            src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-3.png"
            alt="linkedin"
          />
        </div>
        <p>Contact</p>
      </Column>
      <Column className={classes.column2}>
        <h1>About Me</h1>
        <p>
          I’m a self-taught developer with broad experience in management,
          gained through working in family business as well as running a small
          business focused on sales. Skilled in establishing connections,
          creative problem solving and leading a group of people. Keen to learn
          and gain new skills and qualifications. Highly motivated.
        </p>
        <p>In my spare time I'm a movie buff and a board gamer.</p>
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
