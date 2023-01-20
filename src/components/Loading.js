import classes from "./Loading.module.css";
import loadgif from "../img/loading.gif";
import { useEffect } from "react";

const Loading = (props) => {
  const { url } = props;
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <div className={classes.main}>
      <img
        className={classes.loader}
        src={loadgif}
        alt="gif as we load the site"
      />
      <h1>Give me a sec, the app is loading.</h1>
    </div>
  );
};

export default Loading;
