import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "./ListOfWords.scss";

import { WordAddForm } from "../components/WordAddForm";
import { Modal } from "../components/modalWindow";
import { IListWords, IWord } from "../types/types";

export const ListOfWords: React.FC<IListWords> = ({ words, setWords }) => {
  const [isVisible, setVisible] = React.useState(false);

  const handleDelete = (id: string) => {
    const filteredWords = words.filter((item: IWord) => item.id !== id);

    setWords(filteredWords);
  };

  return (
    <>
      <button
        onClick={() => {
          setVisible(true);
        }}
        className="btn-add"
      >
        Add new word
      </button>
      <Modal
        isVisible={isVisible}
        setVisible={setVisible}
        width={450}
        height={400}
        title="Add your words"
      >
        <WordAddForm setWords={setWords} />
      </Modal>
      <div>
        <h3 className="list-header">Your dictionary</h3>
        <div className="list-word-wrapper">
          <span className="list-lg">english</span>
          <span className="list-lg">spanish</span>
          <span className="list-lg">delete</span>
        </div>
        {words?.map((item: IWord) => (
          <li className="list-word-wrapper" key={item.id}>
            <span className="list-word">{item.eng}</span>
            <span className="list-word">{item.esp}</span>
            <button
              className="btn-delete"
              onClick={() => handleDelete(item.id)}
            >
              <FontAwesomeIcon className="icon" icon={faTrashCan} />
            </button>
          </li>
        ))}
      </div>
    </>
  );
};
