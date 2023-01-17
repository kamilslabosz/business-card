import classes from "./Home.module.css";
import Card from "./Card";

const Home = (props) => {
  return (
    <div className={classes.main}>
      <Card />
    </div>
  );
};

export default Home;
