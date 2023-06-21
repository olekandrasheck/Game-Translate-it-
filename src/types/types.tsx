export interface IWord {
  id: string;
  eng: string;
  esp: string;
}
export interface IListWords {
  words: IWord[];
  setWords: React.Dispatch<React.SetStateAction<IWord[]>>;
}

export interface IForm {
  eng: string;
  esp: string;
}
export interface IRoundInfoProps {
  score: number;
  currentRound: number;
  roundsCount: string;
}
export interface IRound {
  score: number;
  gameWords: IWord[];
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  showResult: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IModalWindowProps {
  isVisible?: boolean;
  width?: number;
  height?: number;
  color?: string;
  title?: string;
  setVisible: (isVisible: boolean) => void;
  children: React.ReactElement;
}
