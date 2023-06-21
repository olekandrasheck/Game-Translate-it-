import React, { useEffect, useState } from "react";
import "./Round.scss";

import { Modal } from "./modalWindow";
import { IRound } from "../types/types";

export const Round: React.FC<IRound> = ({
  gameWords,
  round,
  setRound,
  score,
  setScore,
  showResult,
}) => {
  const [typedWord, setTypedWord] = useState("");
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [checkBtnDisabled, setCheckBtnDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [hint, setHint] = useState("");
  const [showHint, setShowHint] = useState(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTypedWord(evt.target.value);
    if (evt.target.value.length <= 1) {
      setCheckBtnDisabled(true);
    }
  };

  const handleCheckWord = (
    typedWord: string,
    initialWord: string,
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setNextBtnDisabled(true);
    if (typedWord === initialWord) {
      setScore(score + 2);
      setMessage("You got +2 points");
      setCheckBtnDisabled(false);
    }

    setScore(score - 1);
    setMessage("Mistake! Сheck yourself, please;)");
  };

  const handleNext = (
    gameWordsLength: number,
    round: number,
    setRound: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (gameWordsLength > round) {
      setRound(round + 1);
    } else {
      showResult(true);
    }
  };

  const handleShowHint = (score: number, hintShowed: boolean) => {
    if (!hintShowed) {
      setScore(score - 1);
      setShowHint(true);
    }
  };

  useEffect(() => {
    setTypedWord("");
    setNextBtnDisabled(false);
    setMessage("");
    setShowHint(false);
    setHint(
      gameWords[round - 1].esp
        .split("")
        .map((item: string, index: number, array: string[]) =>
          index > 1 && index !== array.length - 1 ? "*" : item
        )
        .join("")
    );
  }, [round]);

  return (
    <div className="round__component">
      <span className="game-label">please translate word below:</span>
      <div className="wrapper-translation">
        <div className="game-word">{gameWords[round - 1].eng}</div>
        <div className="wrapper-string-translation">
          <label className="round-label">type here &#8658; </label>
          <input
            className="round-input"
            onChange={handleChange}
            value={typedWord}
          ></input>

          <button
            className="btn-check"
            onClick={() =>
              handleCheckWord(
                typedWord,
                gameWords[round - 1].esp,
                score,
                setScore,
                setMessage
              )
            }
            disabled={!checkBtnDisabled}
          >
            &#8658; check translation
          </button>
        </div>
      </div>
      <p className="round-message">{message}</p>
      <div className="button-wrapper">
        <button
          className="btn-hint-next"
          onClick={() => handleShowHint(score, showHint)}
        >
          Show hint <br /> (costs 1 score)
        </button>
        <button
          className="btn-hint-next"
          onClick={() => handleNext(gameWords.length, round, setRound)}
          disabled={!nextBtnDisabled}
        >
          {gameWords.length !== round ? "Next Round" : "Show result"}
        </button>
      </div>
      <Modal
        isVisible={showHint}
        setVisible={() => setShowHint(false)}
        width={250}
        height={70}
      >
        <div className="round-hint__modal">{hint}</div>
      </Modal>
    </div>
  );
};
