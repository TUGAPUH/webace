import React, { useEffect, useState } from "react";
import style from "./wordle.module.scss";
import { HeaderWordle } from "./Components/HeaderWordle/HeaderWordle";
import { MainFieldWordle } from "./Components/MainFieldWordle/MainFieldWordle";
import { FooterFieldWordle } from "./Components/FooterFieldWordle/FooterFieldWordle";
import useWordle from "./Hooks/useWordle";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../../Firebase/firebaseInit";
import { ModalEndGame } from "../../Modals/ModalEndGame/ModalEndGame";

const WordlePage = () => {
  const [serverResponce, loading] = useCollectionData(collection(db, "wordle"));
  const [solution, setSolution] = useState();
  const { currentGuess, handleKeyPressed, guesses, turn, isCorrect } =
    useWordle(solution);
  const [messageEndGame, setMessageEndGame] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!loading) {
      const arrOfSolutions = Object.values(serverResponce[0]);
      const randomSolution =
        arrOfSolutions[Math.floor(Math.random() * arrOfSolutions.length)];
      setSolution(randomSolution);
    }
  }, [loading]);

  useEffect(() => {
    if (turn === 5 && !isCorrect) {
      setShow(true);
      setMessageEndGame({
        head: "Woops!",
        body: "You didn't guess the word press restart to play again.",
      });
    }
    if (isCorrect) {
      setShow(true);
      setMessageEndGame({
        head: "Congratulations!",
        body: "You have guessed the word, press restart to play again.",
      });
    }
  }, [turn, isCorrect]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressed);

    return () => {
      document.removeEventListener("keydown", handleKeyPressed);
    };
  }, [handleKeyPressed]);

  return (
    <>
      <div className={style.wordlePageWrapper}>
        <div className={style.wordleWrapper}>
          <div className={style.wordleField}>
            <HeaderWordle />
            <MainFieldWordle
              guesses={guesses}
              currentGuess={currentGuess}
              turn={turn}
            />
            <FooterFieldWordle handleKeyPressed={handleKeyPressed} guesses={guesses} />
          </div>
        </div>
      </div>
      <ModalEndGame
        messageEndGame={messageEndGame}
        id="modalEndGame"
        show={show}
      />
    </>
  );
};

export default WordlePage;
