import styles from "./Result.module.scss";

export const Result: React.FC<{
  score: number;
}> = ({ score }) => {
  return (
    <div className={styles["wrapper"]}>
      <p className={styles["result"]}>
        YOUR SCORE <br />
        <span className={styles["score"]}>{score}</span>
      </p>
      {score >= 6 && <p className={styles["result-message"]}>Excellent!</p>}
      {score < 6 && score > 0 && (
        <p className={styles["result-message"]}>
          Good job, but you can better!
        </p>
      )}
      {score <= 0 && (
        <p className={styles["result-message"]}>Time to repeat words</p>
      )}
    </div>
  );
};
