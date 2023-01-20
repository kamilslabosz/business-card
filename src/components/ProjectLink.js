import { useNavigate } from "react-router-dom";
import classes from "./ProjectLink.module.css";

const ProjectLink = (props) => {
  const navigate = useNavigate();
  const { href, title, description } = props;
  return (
    <>
      <a className={classes.link} href={href} onClick={() => navigate(href)}>
        {title}
      </a>
      <p className={classes.paragraph}>{description}</p>
    </>
  );
};

export default ProjectLink;
