import classes from "./ProjectLink.module.css";

const ProjectLink = (props) => {
  return (
    <>
      <a className={classes.link} href={props.href}>
        {props.title}
      </a>
      <p className={classes.paragraph}>{props.description}</p>
    </>
  );
};

export default ProjectLink;
