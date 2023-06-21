import styles from "./Rules.module.scss";

export const Rules = () => {
  return (
    <div className={styles["container"]}>
      <ul className={styles["wrapper"]}>
        RULES:
        <li>Choose the number of words for game: 3, 5 or 7</li>
        <li>We will choose random words from your list of words</li>
        <li>Click the button "START GAME"</li>
        <li>
          Enter the translation of the word in the box and press the button
          "check translation"
        </li>
        <li>Then you can go to the next round (button "NEXT ROUND")</li>
        <li>Also remember about the button "HINT"</li>
        <li>
          After the game ends, the button "SHOW RESULT" will become active
        </li>
        <li>Click on it and see your result</li>
        <li>Close the modal window</li>
      </ul>
      <img
        src="img/traducir.jpg"
        alt="img_traducir"
        className={styles["img-game"]}
      />
    </div>
  );
};
