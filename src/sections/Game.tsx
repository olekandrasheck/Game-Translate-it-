import React from "react";
import { useState } from "react";
import styles from "./Game.module.scss";

import { Round } from "../components/Round";
import { Modal } from "../components/modalWindow";
import { RoundInfo } from "../components/ShowRoundInfo";
import { Result } from "../components/Result";
import { IWord } from "../types/types";
import { Rules } from "../components/Rules";

export const Game: React.FC<{ words: IWord[] }> = ({ words }) => {
  const [selectedOption, setSelectedOption] = useState("3");
  const [showResult, setShowResult] = useState(false);
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [gameWords, setGameWords] = useState<IWord[]>([]);

  const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const shuffle = (words: IWord[]) => {
    setGameWords(
      words.sort(() => Math.random() - 0.5).slice(0, Number(selectedOption))
    );
  };

  const endGame = () => {
    setRound(1);
    setScore(0);
    setGameWords([]);
    setShowResult(false);
  };
  return (
    <div className={styles["wrapper-game"]}>
      <h2 className={styles["header-game"]}>"translate it"</h2>
      <label className={styles["label-game"]}>
        Chose number of words for your game
        <select
          className={styles["select-game"]}
          value={selectedOption}
          onChange={changeSelect}
        >
          <option value="3">three</option>
          <option value="5">five</option>
          <option value="7">seven</option>
        </select>
      </label>

      <div>
        <button
          onClick={() => shuffle(words)}
          className={styles["button-game"]}
        >
          Start game
        </button>
      </div>
      <Modal
        width={600}
        height={450}
        title="Right correct translation"
        isVisible={gameWords.length > 0}
        setVisible={() => endGame()}
      >
        {!showResult ? (
          <div>
            <RoundInfo
              score={score}
              currentRound={round}
              roundsCount={selectedOption}
            />
            <Round
              showResult={setShowResult}
              gameWords={gameWords}
              round={round}
              setRound={setRound}
              score={score}
              setScore={setScore}
            />
          </div>
        ) : (
          <div>
            <Result score={score} />
          </div>
        )}
      </Modal>
      <Rules />
    </div>
  );
};
