import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Game } from "./sections/Game";
import { Home } from "./sections/Home";
import { Header } from "./components/Header";
import { ListOfWords } from "./sections/ListOfWords";
import { IWord } from "./types/types";

export const defaultWords: IWord[] = [
  { id: "1", eng: "house", esp: "casa" },
  { id: "2", eng: "bedroom ", esp: "dormitorio" },
  { id: "3", eng: "kitchen", esp: "cocina" },
  { id: "4", eng: "garden", esp: "jardín" },
  { id: "5", eng: "porch", esp: "porche" },
  { id: "6", eng: "cup", esp: "taza" },
  { id: "7", eng: "dish", esp: "plato" },
  { id: "8", eng: "soap", esp: "jabón" },
  { id: "9", eng: "bed", esp: "cama" },
  { id: "10", eng: "bottle", esp: "botella" },
];

function App() {
  const [words, setWords] = React.useState(defaultWords);

  return (
    <BrowserRouter>
      <Header />
      <div className="main_content">
        <Routes>
          <Route path="/" element={<Home />} />s
          <Route
            path="/listOfWords"
            element={<ListOfWords setWords={setWords} words={words} />}
          />
          <Route path="/game" element={<Game words={words} />} />
        </Routes>
      </div>
      <div className="footer"></div>
    </BrowserRouter>
  );
}

export default App;
