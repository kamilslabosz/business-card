import classes from "./ProjectLink.module.css";

const ProjectLink = (props) => {
  return (
    <>
      <a href={props.href}>{props.title}</a>
      <p>{props.description}</p>
    </>
  );
};

export default ProjectLink;
