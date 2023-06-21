import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles["header"]}>
      <h2>Game is the best way to learn a foreign language. Let's try!</h2>

      <div>
        <Link to="/game" className={styles["link"]}>
          Game page
        </Link>
        <p className={styles["text"]}>or setup your words</p>
        <br />
        <Link to="/listOfWords" className={styles["link"]}>
          Your list of words
        </Link>
      </div>
      <img src="img/espanol.jpeg" alt="espanol" className={styles["img"]} />
    </div>
  );
};
