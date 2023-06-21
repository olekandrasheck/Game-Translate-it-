import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./WordAddForm.module.scss";

import { IForm, IWord } from "../types/types";

const validationSchema = Yup.object({
  eng: Yup.string().required("Please add english word"),
  esp: Yup.string().required("Please add spanish word"),
});

export const WordAddForm: React.FC<{
  setWords: React.Dispatch<React.SetStateAction<IWord[]>>;
}> = ({ setWords }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWord>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: IForm) => {
    const word = { id: nanoid(), ...data };
    setWords((prev: IWord[]) => [...prev, word]);
    reset({ eng: "", esp: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Please write your pair of words</h3>
        <div>
          <label htmlFor="eng">english: </label>
          <input id="eng" placeholder="eng" type="text" {...register("eng")} />
        </div>
        <p className={styles["error-message"]}>{errors.eng?.message}</p>
        <div>
          <label htmlFor="esp">spanish: </label>
          <input id="esp" placeholder="esp" type="text" {...register("esp")} />
        </div>
        <p className={styles["error-message"]}>{errors.esp?.message}</p>

        <button className={styles["modal-add-button"]} type="submit">
          ADD
        </button>
      </form>
    </>
  );
};
